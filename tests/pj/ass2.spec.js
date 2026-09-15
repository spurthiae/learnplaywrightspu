import { test, expect } from '@playwright/test';

test('GreenKart', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');

  const product1 = page.locator(
    "xpath=//div[@class='product' and .//img[@alt='Almonds - 1/4 Kg']]"
  );

  const product2 = page.locator(
    "xpath=//div[@class='product' and .//img[@alt='Pomegranate - 1 Kg']]"
  );

  // Add products to cart
  await product1.locator("button").click();
  await product2.locator("button").click();

  // Get product prices
  const price1 = Number(
    await product1.locator(".product-price").textContent()
  );

  const price2 = Number(
    await product2.locator(".product-price").textContent()
  );

  // Calculate total price
  const totalPrice = price1 + price2;

  console.log("Price1:", price1);
  console.log("Price2:", price2);
  console.log("Total Price:", totalPrice);

  // Click Cart
  await page.locator("xpath=//img[@alt='Cart']").click();

  // Get total from cart
  const cartTotal = Number(
    await page.locator("xpath=(//div[@class='cart-info']//strong)[2]").textContent()
  );

  console.log("Cart Total:", cartTotal);

  // Verify
  expect(cartTotal).toBe(totalPrice);
});