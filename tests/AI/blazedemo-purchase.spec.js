import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

const departureCities = [
  'Paris',
  'Philadelphia',
  'Boston',
  'Portland',
  'San Diego',
  'Mexico City',
  'São Paolo',
];

const destinationCities = [
  'Buenos Aires',
  'Rome',
  'London',
  'Berlin',
  'New York',
  'Dublin',
  'Cairo',
];

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function timeInMinutes(time) {
  const [, hour, minute, meridiem] = time.match(/(\d+):(\d+)\s(AM|PM)/);
  let normalizedHour = Number(hour) % 12;
  if (meridiem === 'PM') normalizedHour += 12;
  return normalizedHour * 60 + Number(minute);
}

test('randomly books the best-value BlazeDemo flight and verifies the receipt', async ({ page }) => {
  test.setTimeout(60000);

  const departureCity = randomItem(departureCities);
  const destinationCity = randomItem(destinationCities);
  const passenger = {
    name: faker.person.fullName(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state({ abbreviated: false }),
    zipCode: faker.location.zipCode('#####'),
    cardNumber: faker.string.numeric(16),
    cardMonth: String(faker.number.int({ min: 1, max: 12 })).padStart(2, '0'),
    cardYear: String(new Date().getFullYear() + 2),
    nameOnCard: faker.person.fullName(),
  };

  await page.goto('https://blazedemo.com/', { waitUntil: 'domcontentloaded' });
  await page.locator('select[name="fromPort"]').selectOption({ label: departureCity });
  await page.locator('select[name="toPort"]').selectOption({ label: destinationCity });
  await page.getByRole('button', { name: 'Find Flights' }).click();

  await expect(page.getByRole('heading', { name: `Flights from ${departureCity} to ${destinationCity}:` })).toBeVisible();

  const flightRows = page.locator('table tbody tr');
  const flights = await flightRows.evaluateAll((rows) => rows.map((row) => {
    const cells = [...row.querySelectorAll('td')].map((cell) => cell.textContent.trim());
    return {
      airline: cells[2],
      departureTime: cells[3],
      price: Number(cells[5].replace('$', '')),
    };
  }));
  const prices = flights.map((flight) => flight.price);
  const departureTimes = flights.map((flight) => timeInMinutes(flight.departureTime));
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const minDeparture = Math.min(...departureTimes);
  const maxDeparture = Math.max(...departureTimes);
  const score = (flight) => {
    const priceScore = maxPrice === minPrice ? 0 : (flight.price - minPrice) / (maxPrice - minPrice);
    const time = timeInMinutes(flight.departureTime);
    const timeScore = maxDeparture === minDeparture ? 0 : (time - minDeparture) / (maxDeparture - minDeparture);
    return priceScore * 0.65 + timeScore * 0.35;
  };
  const selectedFlight = flights.reduce((best, flight) => score(flight) < score(best) ? flight : best);
  const selectedIndex = flights.indexOf(selectedFlight);

  await flightRows.nth(selectedIndex).getByRole('button', { name: 'Choose This Flight' }).click();
  await expect(page.getByRole('heading', { name: 'Your flight from' })).toBeVisible();

  await page.locator('input[name="inputName"]').fill(passenger.name);
  await page.locator('input[name="address"]').fill(passenger.address);
  await page.locator('input[name="city"]').fill(passenger.city);
  await page.locator('input[name="state"]').fill(passenger.state);
  await page.locator('input[name="zipCode"]').fill(passenger.zipCode);
  await page.locator('select[name="cardType"]').selectOption('visa');
  await page.locator('input[name="creditCardNumber"]').fill(passenger.cardNumber);
  await page.locator('input[name="creditCardMonth"]').fill(passenger.cardMonth);
  await page.locator('input[name="creditCardYear"]').fill(passenger.cardYear);
  await page.locator('input[name="nameOnCard"]').fill(passenger.nameOnCard);

  await expect(page.locator('input[name="inputName"]')).toHaveValue(passenger.name);
  await expect(page.locator('input[name="address"]')).toHaveValue(passenger.address);
  await expect(page.locator('input[name="city"]')).toHaveValue(passenger.city);
  await expect(page.locator('input[name="state"]')).toHaveValue(passenger.state);
  await expect(page.locator('input[name="zipCode"]')).toHaveValue(passenger.zipCode);
  await expect(page.locator('input[name="creditCardNumber"]')).toHaveValue(passenger.cardNumber);
  await expect(page.locator('input[name="creditCardMonth"]')).toHaveValue(passenger.cardMonth);
  await expect(page.locator('input[name="creditCardYear"]')).toHaveValue(passenger.cardYear);
  await expect(page.locator('input[name="nameOnCard"]')).toHaveValue(passenger.nameOnCard);

  const rememberMe = page.locator('input[name="rememberMe"]');
  if (await rememberMe.count() > 0 && faker.datatype.boolean()) {
    await rememberMe.check();
  }

  await page.getByRole('button', { name: 'Purchase Flight' }).click();
  await expect(page.getByRole('heading', { name: 'Thank you for your purchase today!' })).toBeVisible();

  const receipt = page.locator('table');
  await expect(receipt.getByRole('row', { name: /^Id\s+\S+/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /Status\s+PendingCapture/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /Amount\s+\d+(?:\.\d+)? USD/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /Card Number\s+\S+/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /Expiration\s+\d+ \/\d+/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /^Auth Code\s+\S+/ })).toBeVisible();
  await expect(receipt.getByRole('row', { name: /^Date\s+.+/ })).toBeVisible();
});