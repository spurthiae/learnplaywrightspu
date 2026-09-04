# Software Testing — Complete Detailed Notes

---

## PART 1: INDUSTRY OVERVIEW

### 1.1 Where Testing Happens
- **Web Applications** make up ~90% of testing work in the industry.
- **Mobile Apps / Desktop Apps** make up the remaining share.

**Example — PhonePe (Mobile App / APK):**
Core features that need testing:
- Create account
- Send money using mobile number
- Send money using bank account number
- Send money using UPI
- Send money using QR scanner

### 1.2 Types of Companies

**A) Service-Based Companies** — build software *for* other companies (clients); they don't own the final product.
- Examples: TCS, Infosys, Wipro, Cognizant, Global Logic, Accenture, Capgemini, Deloitte, EY, Mindtree, L&T, HP, DXC, Dell.
- **Real numbers (Infosys, illustrative):**
  - Quarterly profit: ~₹8,501 crore (Jan–Mar)
  - Employees: ~328,594
  - Fresher salary: ~₹3.5 LPA
  - 5 yrs experience: ~₹15 LPA
  - 10 yrs experience: ~₹30 LPA
  - CEO compensation: ~₹82.3 crore
- **Client example:** IKEA hires Infosys to build/maintain its inventory management website.
- **Freelance/outsourcing cost illustration:** $40/hour × 8 hours = $320/day → over a month (≈ ₹30,198 conversion rate assumption) this scales to a large monthly cost — showing why companies also hire full-time employees instead of only contractors for long projects.

**B) Product-Based Companies** — build and *own* their software product and sell/license it directly.
- Examples: SAP (ERP), a school management software company, Ola (cab booking), Zomato/Swiggy (food delivery), Amazon/Flipkart (e-commerce — both B2B and B2C).
- Amazon Prime is an example of a B2C subscription product.

### 1.3 Typical Small Project Team
- 1 Manager
- 1 Product Owner / Business Analyst
- 2 Frontend Developers
- 2 Backend Developers
- 2 Testers

**Tester skillset:** You do NOT need to know a single line of code for manual testing. What you need instead:
- Strong observation skills
- Strong analytical skills

---

## PART 2: MANUAL vs AUTOMATION TESTING

| Manual Testing | Automation Testing |
|---|---|
| Human tests the application directly | Scripts are written to test automatically |
| Deliverables: Test Plan document, Test Cases, Test Reports, Defect Reports | ~90% traditional scripting + ~10% AI-assisted tools, then reports generated |

**AI tools relevant to testing today:**
- GitHub Copilot
- Playwright MCP
- GitHub MCP

**Typical training program structure:** 3 months covering both Manual and Automation testing, daily class 8:15–9:30 AM IST, with recorded classes, assignments, mock interviews, and dedicated interview Q&A sessions. Students are expected to spend ~2 hours/day on self-study outside class.

**Illustrative salary progression in testing (India, ballpark):**
- 3 yrs experience: ₹70,000–80,000 (or up to ~9 LPA depending on company/skill multiplier used: "3 yrs × 3 = 9 LPA" as a rough multiplier heuristic)
- 4 yrs: ~12 LPA
- 5 yrs: ~15 LPA
- 7 yrs average: ~45 LPA
- 10 yrs: 30+ LPA

---

## PART 3: SDLC — SOFTWARE DEVELOPMENT LIFE CYCLE

### 3.1 The Six Phases

**Phase 1 — Requirement Gathering**
- The client (e.g., IKEA) has an **SPOC (Single Point of Contact)** — typically the Product Owner — who communicates requirements to the software company (e.g., IBM/Infosys as vendor).
- Output: **FRS (Functional Requirement Specification)** document.
- Decisions finalized here:
  - **Team structure & timelines**
  - **Technology stack:**
    - Frontend: Angular, React, Vue.js, Node.js
    - Backend: .NET, Java, Python, etc.
    - APIs: REST, RPC, SOAP, GraphQL
    - Databases: SQL, MongoDB, DynamoDB
  - **Architect** finalizes the technical approach (HLD).

**Phase 2 — Design**
- UI/UX Designers create:
  - **HLD** — High Level Design (overall system architecture)
  - **LLD** — Low Level Design (detailed screen/module-level design, e.g., in Figma)

**Phase 3 — Development / Implementation**
- Frontend Developers and Backend Developers write the actual code.

**Phase 4 — Testing** *(this is STLC — see Part 5)*
1. Requirement understanding
2. Test Plan Document
3. Test Cases Document
4. Test Environment setup
5. Test Execution → Defect Reporting → Retest → Close the defect (also: automation script writing here)
6. Test Reports + Defect Reports

**Phase 5 — Release / Deployment**
- The finished, tested application goes live.

**Phase 6 — Maintenance / Enhancements**
- Ongoing bug fixes and feature additions after release.

**Real example — WhatsApp Requirement List (46 features identified during requirement gathering):**
Create account, sync contacts, send/receive message, voice call, video call, security & privacy, logout, payments, end-to-end encryption, themes, 2-step verification, status upload, broadcast, group creation, drafts, edit message, AI chatbot, search contact, channels, backup, upload/edit/delete profile picture, notifications, unread messages, share WhatsApp link, archive message, broadcast list, starred messages, tag status, share status, file access permissions, link/remove devices, block contact, mute group, app language, share location, live location sharing, capture/share photos, share documents, HD images, lock chat, hide chat, update WhatsApp.

### 3.2 SDLC Models — In Detail

**1) Waterfall Model (Sequential/Traditional)**
- Steps happen strictly one after another: Requirement → Design → Development → Testing → Release (one single release at the end).
- In requirement gathering, the client must state **all** requirements upfront (FRS covers everything).
- **Drawbacks:** Time-consuming, wastes resource time if something changes, low success rate, low customer involvement.
- **Best for:** small projects only. Not suitable for big/evolving projects.

**2) V-Model (Verification and Validation)**
- Each development stage (Verification side) is mirrored by a corresponding testing stage (Validation side), planned together from the start.

**3) Prototype Model**
- After requirement gathering, a **prototype** (dummy/demo software) is built using graphical tools.
- If the client approves the prototype → proceed to Design → Development → Testing → Release.
- Reduces risk of building the wrong thing.

**4) Spiral Model**
- An **iterative model** — repeats the requirement → design → build → test cycle in spirals/loops, refining the FRS and product each time.

**5) Agile Model** *(covered in full detail in Part 4)*
- Documentation is the **least priority** compared to working software.
- Client is highly involved throughout via short cycles (Sprints).

---

## PART 4: AGILE METHODOLOGY — FULL DETAIL

### 4.1 Two Agile Models
1. **Scrum Model** — used ~99% of the time in industry.
2. **Kanban Model** — used ~1% of the time.

### 4.2 Agile Artifacts — Hierarchy

```
EPIC 1
 ├─ Feature 1
 │   ├─ User Story 1 (Product Backlog Item)
 │   │    - Description
 │   │    - Acceptance Criteria
 │   ├─ User Story 2
 │   ├─ User Story 3
 │   └─ ...
 ├─ Feature 2
 │   ├─ User Story 7
 │   └─ User Story 8
 └─ Feature 3
     └─ User Story 9

EPIC 2
 ├─ Feature 4 (User Stories 10, 11, 12)
 ├─ Feature 5
 └─ Feature 6

EPIC 3, EPIC 4, EPIC 5 ...
```

- **Product Backlog Items = User Stories** (the full master list of all stories for the product, e.g., User Story 1 through User Story 21+).
- **Sprint Backlog Items** = the subset of user stories being worked on in the *current* sprint only.

**Example — a 2-week sprint pulling 7 user stories from the backlog:**
```
Sprint A: User Story 5 (Add Employee), User Story 8, 9, 10, 11, 12
Sprint B: User Story 13–20 (next 2 weeks)
```

### 4.3 Roles — Full Responsibilities

**1) Product Owner (PO) / Business Analyst (BA)**
- Acts as the **SPOC** from the client side.
- Writes Epics, Features, and User Stories.
- Explains Epics/Features/User Stories to the team.
- Decides **priority** of user stories/features/epics, and can **re-prioritize** work.
- Gives clarification on requirements.
- Reviews the Test Plan document.
- Reviews the Test Case document.
- Decides whether something is a valid **defect** (if a developer refuses to accept it).
- Requests reports from the team.
- Decides whether to accept a completed user story (sign-off).
- Gives direction/instructions to UI/UX Designers.

**2) Scrum Master (SM)**
- Manages and controls the team.
- Motivates the team.
- Schedules **all** meetings (Sprint Planning, Stand-ups, Review, Retro, Grooming).
- Point of contact for any **process-related** queries.
- May ask for status updates on work.
- Arranges **KT (Knowledge Transfer)** sessions for new team members.
- Provides required infrastructure/access to the team.
- Acts as a **Facilitator** — removes blockers for the team.

**3) Team Members** (Frontend Devs, Backend Devs, Testers)
Tester's specific responsibilities:
1. Understand Epics, Features, and User Stories (clarify with PO if needed).
2. Write the Test Plan Document → get it reviewed by SM and PO.
3. Write the Test Case Document → get it reviewed by a peer and the PO.
4. Set up the Test Environment, prepare test data.
5. Execute tests → report defects → track defects → retest fixes; also write/run/maintain automation scripts.
6. Test Closure: prepare Test Reports, Defect Reports, and the **RTM** (Requirement Traceability Matrix).

**Shared/Supporting Resources:**
- **Architect** — prepares HLD, decides what technical approach developers should follow.
- **UI/UX Designers** — work with the PO to design screens (LLD).

*(Governing body reference: "Scrum Alliance" is a well-known organization for Agile/Scrum certification.)*

### 4.4 Agile Ceremonies (Meetings) — Full Detail

**1) Sprint**
- A fixed time-box during which a set of work is completed — commonly **2 weeks**, but can be 2/3/4 weeks depending on the client/project.
- Example: TCS–IKEA project uses 2-week sprints; TCS–Adidas uses 3-week sprints; TCS–Nike may differ again — sprint length is negotiated per client/project.

**2) Sprint Planning**
- **When:** Day 1 of every sprint.
- **Duration:** 2–4 hours.
- **Attendees:** PO, SM, all team members.
- **What happens:** SM assigns user stories to developers and testers; the team estimates and commits to a **Sprint Goal**.

**Real example — assignment table:**
```
Team: Developers - Ruthvik, Hanumanth, Koushal, Latha
      SM - Raju | PO - Spoorthi
      Testers - Rupa, Harshitha

User Story 1 – 3 SP – Hanumanth
User Story 2 – 2 SP – Latha
User Story 3 – 5 SP – Ruthvik
User Story 4 – 3 SP – Latha
User Story 5 – 8 SP – Koushal
User Story 7 – 5 SP – Hanumanth
User Story 8 – 2 SP – Ruthvik
User Story 9 – 5 SP
User Story 9 – 2 SP
User Story 10 – 1 SP
```
- Individual capacity example over a 10-day sprint (8 working days accounted for leaves/overhead):
  Ruthvik 7 SP, Hanumanth 8 SP, Koushal 8 SP, Latha 4 SP, Rupa 8 SP, Harshitha 8 SP → **Total committed: 43 SP**, but team may realistically commit ~40 SP.
- **Capacity is based on:** number of working days, resource availability (leaves), and any pending/spillover work from the previous sprint.

**3) Sprint Review Meeting**
- **Duration:** 2 hours.
- **Scheduled by:** SM.
- **Attendees:** SM, PO, team members, and **Stakeholders**.
- **Purpose:** Demo the completed user stories.
- **Definition of Done (DoD) — checklist before a story can be demoed:**
  1. PO has explained the user story to the team.
  2. Dev team and QA team have analyzed the user story.
  3. Development is completed.
  4. Testing is completed.
  5. Bugs are resolved (fixed) by the developer.
  6. Fixed bugs are retested by QA.
  7. Demo is given to the client.
  8. Client accepts the story.
- The demo is typically given by the BA, or sometimes a developer/tester.

**4) Sprint Retrospective**
- **When:** 1st or 2nd day of the *next* sprint (reflecting on the previous sprint).
- **Scheduled by:** SM.
- **Attendees:** SM, PO, team members.
- **Duration:** 1 hour.
- **Discussion points:**
  1. What went well
  2. What went wrong
  3. How to improve
- Practically: SM shares a collaborative link/board; team gets ~10 minutes to write under three columns — *What went well / What went wrong / Improvement areas*.

**5) Daily Stand-up Meeting (DSM) / Scrum Call**
- **Duration:** 15 minutes.
- **Scheduled by:** SM.
- **Attendees:** SM, PO (BA), team members.
- **Each person answers 3 questions:**
  1. What did you complete yesterday?
  2. What will you work on today?
  3. Any issues/blockers/dependencies?

**6) Backlog Refinement / Grooming**
- **Scheduled by:** SM.
- **Attendees:** SM, PO (BA), team members.
- **Duration:** 1–2 hours.
- **When:** any mid-sprint day.
- **Purpose:** PO explains upcoming user stories (for future sprints); the team **estimates** them.

**Estimation — Planning Poker Method:**
- Story points are decided based on: how many days it will take, and complexity.
- Uses the **Fibonacci Series**: 1, 2, 3, 5, 8, 13...
- Rough mapping used in practice:
  ```
  1 day of work   → 1 story point
  2 days of work  → 2 story points
  3 days of work  → 3 story points
  4 days of work  → 5 story points
  5 days of work  → 5 story points
  6 days of work  → 5 story points
  ```

### 4.5 Other Important Agile Terms

- **Spillover User Story** — a story that didn't finish in the previous sprint and moves into the current sprint.
- **Technical User Story** — a story testers will NOT test directly (e.g., code refactoring, backend-only DB schema changes).
- **Spike User Story** — created for developers to do **research/analysis** only (e.g., "[SPIKE] Analyse how to implement a date filter on the Events page").
- **Sprint Burndown Chart** — a graph tracking remaining work vs. time left in the sprint.
- **Velocity** — the total story points *actually delivered* in a sprint (compare to *planned* velocity).
  - Example: Sprint 6 planned 36 story points; only 31 story points were actually completed → **Velocity = 31**.

**Real example — Sprint 7 (BookMyShow project):**
```
US1234 – Display recommended movies section on Home Page
US1235 – Code refactoring of login feature (Technical story — not tested by QA)
US1236 – Display countries presence in footer
US1237 – Subscribe to newsletter functionality
US1238 – Clear filters on Movies Page
US1239 – [SPIKE] Analyse how to implement date filter on Events Page
US1240 – Search functionality
US1241 – E-gift cards
US1242 – Corporate registration
US1243 – Our Partners section on Corporates Page

Tester: Harshita | PO: Spoorthi | Project Manager: Arun
```

### 4.6 Project Management / Collaboration Tools

| Purpose | Tools |
|---|---|
| Agile project management (Epics/Features/User Stories, Sprint board) | Rally, Jira, Azure DevOps (ADO), Trello, Zoho |
| Email | Outlook, Gmail |
| Collaboration/meetings | MS Teams, Google Workspace, Slack |
| HLD | PowerPoint, Lucidchart |
| LLD | Figma, Adobe XD |

**Rally-specific capabilities:**
- Manage Epics, Features, User Stories.
- Sprint board shows: who's working on which story, status, story points.
- Full history tracked for every item/document.
- Testers can write test cases directly in Rally.
- Testers can report defects directly in Rally.

**Example "My Project" tool stack:** Project Management – Rally · Email – Outlook · Meetings – MS Teams/Slack · Diagrams – Lucidchart · LLD – Figma.

---

## PART 5: STLC — SOFTWARE TESTING LIFE CYCLE

### 5.1 The 7 Testing Principles
1. It's impossible to test all possible inputs (test data) — exhaustive testing isn't feasible.
2. Testing is done to **improve** confidence, not to *prove* there are zero defects.
3. Defect count is **not evenly distributed** across modules/features/user stories (some areas are buggier than others — "defect clustering").
4. Always try to improve your testing strategy — test the same thing in different ways ("pesticide paradox" — repeating identical tests stops finding new bugs).
5. Finding a defect early saves a lot of money/time.
6. We don't perform every type of testing on every project — it depends on context.
7. Failure isn't always the fault of the tester alone.

### 5.2 The 6 STLC Phases
1. **Requirement Analysis / Understanding Requirements**
   - Understand Epics, Features, User Stories via Backlog Refinement/Grooming.
   - Review related Artifacts and Design Documents.
2. **Test Plan Documentation**
3. **Test Case Design / Documentation**
4. **Test Environment Setup**
5. **Test Execution**
   - Includes Defect Reporting, Retesting, and Closing defects; automation scripts are also written here.
6. **Test Closure**
   - Test Reports and Defect Reports finalized.

---

## PART 6: TEST PLAN DOCUMENTATION (IEEE 829 Standard)

**Standards referenced:** IEEE, ISO — organizations that define standard formats for software testing documents.

### The 19 Sections of an IEEE 829 Test Plan

1. **Test Plan Identifier** — ID; first-page heading with the project name.
2. **References** — links to User Stories/Features/Epics and Design Documents.
3. **Introduction** — ~5 paragraphs describing the project.
4. **Test Items** — Scope and Out-of-Scope.
   - *Example (Web):* Scope = Chrome, Firefox, Edge, Safari. Out of scope = Electron, Brave, Opera, UC Browser.
   - *Mobile:* which OS, versions, devices are covered.
   - *Desktop:* which OS covered.
5. **Software Risk Issues** — e.g., infrastructure availability, information availability, frequently changing requirements, scope changes, resource availability.
6. **Features to be Tested** — table of user stories in scope (e.g., US1234 – Login).
7. **Features Not to be Tested** — Spike stories, Technical stories.
8. **Approach** — what type of testing, at which levels.
9. **Item Pass/Fail Criteria** — Pass = Expected result equals Actual result. Fail = they don't match.
10. **Suspension Criteria and Resumption Requirements**
    - **Entry Criteria** (conditions to *start* testing a story):
      1. 100% of development is complete.
      2. Developer has completed Unit Testing.
      3. Test Case document is reviewed and approved.
      4. Test environment is ready.
    - **Suspension Criteria:**
      1. 90% of major functionalities are not working.
      2. Client changes the requirement mid-sprint.
    - **Exit Criteria:**
      1. All planned functionalities are working fine.
      2. All reports are shared with the customer.
      3. All defects are resolved, retested, and confirmed working.
11. **Test Deliverables** — Test Plan, Test Case Documents, Test Report, Defect Report, RTM, Summary Report.
12. **Remaining Test Tasks** — typically "NA" for a standard sprint.
13. **Environmental Needs / Infrastructure Needs**
    - *Web:* Chrome, Edge, Safari, Firefox, Rally access, Lucidchart access, Figma access.
    - *Mobile:* devices with Android (e.g., versions 13–17) and iOS (e.g., versions 18–26); cloud device platforms like **Sauce Labs, BrowserStack, LambdaTest**; simulators/emulators.
14. **Staffing and Training Needs** — any KT required, extra resources needed (often "NA").
15. **Responsibilities** — table of tester name + roles/responsibilities.
    - *Example:* Harshitha (QA Lead/Sr.) — understands business requirements, prepares test plan, reviews test cases, executes tests. Roopa (Jr. Tester) — supports execution.
16. **Schedule** — table: User Story | Owner | Start Date | End Date.
17. **Planning Risks and Contingencies** — often "NA."
18. **Approvals** — signed off by Scrum Master and Product Owner.
19. **Glossary** — e.g., UAT = User Acceptance Test, PO = Product Owner.

### Practical Notes on Test Plans
- Agile philosophy: teams focus on **working software over comprehensive documentation** — so test plans are kept lean.
- A Test Plan is typically written **once per Sprint**, at the start of the sprint.
- Usually a **senior tester** (e.g., someone with 7 years of manual testing experience) writes the Test Plan for the whole sprint.
- Most companies **do** provide a Test Plan template to reuse each sprint.

**Real example — Sprint task distribution across a mock team, each testing a different live-site case study:**
```
Ruthvik  – PharmEasy   (Web)
Roopa    – Canara Bank (Web)
Harshita – Where is my Train (Mobile)
Spoorthi – JioHotstar  (Web)
Koushal  – Axis Bank   (Mobile App)
Latha    – Instagram   (Mobile)
Hanumanth – Ajio       (Web)
```

---

## PART 7: TYPES OF TESTING — FULL BREAKDOWN

### 7.1 By Functional Aspect

**Functional Testing**
- Verifies: does the app work as per the client's requirement?

**Non-Functional Testing** covers:
1. **Security** of the app
2. **Performance** of the app (tools: JMeter, LoadRunner, App Dynamics)
3. **Compliance** of the app
4. **Multi-language support**
5. **Usability**

### 7.2 By Source Code Access

| Type | Who does it | Access to source code |
|---|---|---|
| **White Box Testing** | Developer (this is Unit Testing) | Yes — code is tested line by line |
| **Black Box Testing** | QA Engineer | No — testing purely from outside/UI |
| **Grey Box Testing** | Developer + Tester together | Partial — dev changes code, tester tests it in real time |

### 7.3 Functional Testing Cycle in Detail

**Step 1 — Smoke Testing** (a.k.a. Build Verification Testing)
- Done right after receiving a new build from the developer.
- Goal: verify the build is *stable enough* to test at all — check high-level functionalities across the *whole* application.
- Typically **30–70 test cases**, all pre-documented.
- **Example smoke test list:** Add User → Add Job Title/Pay Grades/Work Shifts/Employee Statuses/Job Categories → Add Employee.

**Step 2 — User Story / Feature Testing**
- Testers execute their assigned user stories' full test case set.
- *Example:*
  ```
  Add Employee    – Roopa    – 30 tests → 5 FAIL, 25 PASS
  Submit Claim    – Harshita
  Add Buzz Post   – Harshita
  Edit Employee   – Roopa
  Delete Employee – Roopa
  ```

**Step 3 — Defect Fix Cycle**
- Defects are reported → developer fixes → new build given → **Smoke test again** on the new build.

**Step 4 — Sanity Testing**
- After getting a build with specific fixes, test **only** the specific area/change the developer made — not the whole app.

**Step 5 — Retesting**
- Re-testing the *exact* user story / bug fix again to confirm it now works. ("Retesting the entire user story along with the bug fix is called Retesting.")

**Step 6 — Regression Testing**
- Before releasing new features, test the **entire application in depth** to make sure old/existing functionality hasn't broken.
- Regression test suites are large: typically **700–3000 test cases**, often automated.
- Example: 5 user stories ready for release, but the full app (300+ user stories) needs a regression pass before go-live.

### 7.4 Non-Functional Testing — In Detail

**Usability Testing**
- Checks whether the application is user-friendly and whether the end user can understand it easily.
- Examples of apps evaluated for usability: Tally, SAP, Photoshop, WhatsApp, Facebook, Instagram.
- Usability is improved through: good design, clear instructions, labels, placeholders, colors.

**Performance Testing**
- Conducted by a Performance Test Engineer.
- Key questions: How many people use the app at once? How large is the data? Is the app fast or slow?
- **Tools:** JMeter, LoadRunner, K6, LoadNinja, App Dynamics, BlazeMeter (and 100s of others).
- **Sub-types:**
  1. **Load Testing** — apply varying levels of expected load (number of users/network traffic) and observe behavior. Example load levels: 100 → 1,000 → 10,000 → 1 lakh → 5 lakh users.
  2. **Stress Testing** — apply *extreme* load beyond expected capacity (e.g., 5 million users) to see where/how the system breaks.
  3. **Endurance Testing** — a large number of users sustained over a **long period of time**.
  4. **Volume Testing** — increase the *size of data* stored on the server, then test how performance is affected.

**Security Testing**
- Checks whether the application is secure.
- Includes: ethical hacking, vulnerability scanning, penetration testing (pen test), security audits.
- Many specialized tools exist in the market for this.

**Compliance Testing**
- Ensures the app follows legal/regulatory standards (often involves legal associates).

**I18N Testing (Internationalization)**
- Checks the app is built to *support* multiple currencies, time zones, languages, and cultures.

**L10N Testing (Localization)**
- Checks the app is correctly *adapted* for a specific currency, time zone, language, and culture.

**Ad-hoc / Exploratory Testing**
- Unscripted, free-form testing without predefined test cases — applicable to Web apps, Mobile apps, and APIs.
- Real example context: at the time of Backlog Grooming, exploring functionalities like Job Title creation, Add Employee, Pay Grades to understand them before formal test case writing.

---

## PART 8: LEVELS OF TESTING (Testing Pyramid / Quality Gates)

### Level 1 — Unit Testing
- Conducted by **Developers**.
- Every single line of code is tested.
- **Unit test cases** = automated scripts that verify code line by line.
- **Tools by language:**
  | Language | Tools |
  |---|---|
  | Java | TestNG, JUnit |
  | JavaScript | Mocha, Jest, Jasmine, Cypress, Playwright |
  | C# | NUnit, MSTest |
  | Python | PyTest |
- Unit test reports must be **shared with the QA team**.
- **Code Coverage:** measures how much of the code is covered by unit tests.
  - Formula: `(Lines covered ÷ Total lines) × 100`
  - Example: 270 lines covered out of 300 total lines → 270/300 × 100 = **90% code coverage**.
  - **Tools:** SonarQube, Istanbul, JaCoCo.
  - **Rule of thumb:** if code coverage is 90%+ , the story is accepted for QA testing.

### Level 2 — Integration Testing
- Conducted by **QA Engineers**.
- Ensures correct **data flow** between modules/features.

### Level 3 — System Testing
- Conducted by **QA Engineers**.
- Full **end-to-end flows**, tested as per the end user's actual requirements.
- Example context: a large project may involve 11 different teams collaborating on system-level flows.

### Level 4 — Acceptance Testing
- **Alpha Testing / UAT (User Acceptance Testing):** Product Owners/Business Analysts use the app like an end user and test it themselves.
- **Beta Release:** a sample of real end users try the software and give feedback before full public release.

---

## PART 9: TEST CASES — DEEP DIVE

### 9.1 Definition
A test case is a **step-by-step procedure to evaluate (test) a functionality.**

### 9.2 The 5W1H Framework for Test Case Thinking
Before writing test cases, ask:
- **Why** are we developing this?
- **What** is the use of this User Story/Feature?
- **How** is it useful to end users?
- **Who** can access this feature?
- **Which** things are required for testing?
- **When**/**Where** does this apply?

### 9.3 Sample Test Cases — Login Functionality (US1234)

1. **Verify login with valid credentials**
   - Step 1: Launch the URL/Application
   - Step 2: Enter valid username
   - Step 3: Enter valid password
   - Step 4: Click Login
   - Step 5: User should be navigated to the Dashboard page
   - Test Data: username = `Admin`, password = `admin123`

2. **Verify login with valid username + invalid password** → should show login error.
3. **Verify login with invalid username + valid password** → should show login error.
4. **Verify login with invalid username + invalid password** → should show login error.
5. **Verify login with empty fields** → should show validation error for both username and password.
6. **Verify trying to log in when already logged in** (Precondition: user already logged in) → user should just be redirected to dashboard directly.

### 9.4 Sample Test Cases — Add Employee (US1235)
1. Verify Add Employee with only mandatory fields filled.
2. Verify adding employee using a PNG file < 1MB.
3. Verify adding employee using a JPG file < 1MB.
4. Verify adding employee using a GIF file < 1MB.
5. Verify validation message for entering more than 30 characters in first/last/middle name.
6. Verify middle name is optional.
7. Verify validation messages appear when mandatory fields are left blank.
8. Verify adding employee using a PNG file > 1MB.
9. Verify adding employee using a JPG file > 1MB.
10. Verify adding employee using a GIF file > 1MB.
11. Verify adding employee using unsupported file types (Word/Excel/text/audio/video).
12. Verify the user can leave the Employee ID field blank.
13. Verify validation message when Employee ID exceeds 10 characters.
14. Verify adding an employee with a **duplicate** Employee ID.

*(After writing, the document goes through Peer Review and PO Review.)*

### 9.5 Why We Document Test Cases
1. Acts as a **checklist** during test execution.
2. Useful if a **different tester** needs to execute the same tests.
3. Acts as **evidence** of what was tested.
4. Helps prepare **Smoke** and **Regression** test case sets later.
5. Useful for **Automation** purposes (basis for scripts).
6. Useful for preparing **Test Reports**.

### 9.6 Test Case Template — Standard Fields

| Field | Description |
|---|---|
| S.No | Serial number |
| Created Date | Date created |
| Test Case ID | Unique ID, e.g., TC1234 |
| Created By | Author |
| Test Scenario | High-level scenario, e.g., "Login with credentials" |
| Test Case Title | Specific case title |
| Description | What is being tested |
| Test Steps | Step-by-step actions |
| Expected Result | What *should* happen |
| Actual Result | What *actually* happened (filled during execution) |
| Pre-requisites / Pre-condition | Setup needed before testing |
| Test Data | Sample input data |
| Reviewed By | Reviewer name |
| Status | Pass/Fail |

**Filled example:**
```
S.No: 1 | Created Date: 21/07/2026 | Test Case ID: TC1234 | Created By: Raju
Test Scenario: Login with credentials
Test Case Title: Verify Login with valid credentials
Description: Login with username and password
Test Steps: Launch URL → Enter valid username → Enter valid password → Click Login
Expected Result: User should be navigated to Dashboard page
Pre-requisites: NA
Test Data: Username: Admin | Password: admin123
Reviewed by: Rupa
```

**Where test cases are written:** Excel sheet, Word, or a Test Management tool (Jira, Rally, ADO, Zoho).

### 9.7 Test Case Design Techniques — Full Detail

**1) Equivalence Partitioning**
- Steps: (a) Identify different classes of inputs, (b) divide the input range into equal parts and test representative values from each.
- *Example — field accepts a number 1–100:* classes = alphabets, special characters, combination of number+alphabet, empty, spaces, valid integer (test e.g. 1, 50, 100), invalid float.
- *Example — file upload up to 5MB, only JPG:* classes = PNG, TIFF, GIF, TEXT, PDF, Audio, Video (all invalid types) vs. valid JPG at sizes like 1KB, 2.5MB, 5MB.

**2) BVA — Boundary Value Analysis**
- When a range is given, test the **boundaries**: boundary−1, boundary, boundary+1.
- *Example — range 1 to 100:* test 0, 1, 2, 99, 100, 101.
- *Example — file upload up to 5MB (5120KB):* test 5119KB, 5120KB, 5121KB.
- These boundary values are also called **edge cases**.

**3) Decision Table Technique**
- Used when multiple input conditions combine to determine different outputs.
- *Example — School Management App notification rules (5 user types × 5 notification types = 25 combinations, but a decision table condenses this into one clear reference table):*

| Notification Type | Parent | Student | Teacher | Admin | Principal |
|---|---|---|---|---|---|
| Holiday | ✅ True | ✅ True | ✅ True | ✅ True | ✅ True |
| Payment Due | ✅ True | ❌ False | ❌ False | ✅ True | ❌ False |
| Attendance | ✅ True | ✅ True | ❌ False | ❌ False | ❌ False |
| Sports Event | ✅ True | ✅ True | ✅ True | ✅ True | ✅ True |
| Time Table Change | ❌ False | ✅ True | ✅ True | ❌ False | ✅ True |

**4) State Transition Technique**
- Used when the system's behavior depends on the **previous state/actions**.
- *Example — ATM PIN entry:*
  - 1st attempt wrong → 2 more chances given.
  - 2nd attempt wrong → 1 more chance given.
  - 3rd attempt wrong → card blocked / access denied.
  - Correct PIN at any attempt → access accepted.

**5) Use Case Testing Technique**
- Test based on real-world usage scenarios/flows for a feature.
- *Example — Payment feature use cases:*
  1. Bank payment
  2. Credit card payment
  3. Debit card payment
  4. Partial amount via coupon + remaining paid separately
  5. Apply coupon for full value
  6. Cash on Delivery (COD)

### 9.8 Test Coverage
- Goal: 100% test coverage of all payment methods, e.g.: bank payment, credit card, debit card, COD, coupons — all combinations tested.

### 9.9 Test Environment & Execution — Team Assignment Example
```
Ruthvik + Harshitha → Buzz Newsfeed, Share Photos, Share Video, 
                       Most Recent/Most Liked/Most Commented sorting

Latha + Roopa + Spoorthi → Punch In/Out, My Records, PIM Employee Search

Koushal + Hanumanth → My Info - Personal Details, My Info - Contact Details
```

---

## PART 10: DEFECTS — FULL DETAIL

### 10.1 Key Definitions
- **Defect** = Actual Result ≠ Expected Result.
- **Bug** = the informal/common name for a defect.
- **Error** = e.g., a syntax error or build error.
- **Failure** = the app malfunctioning as observed by the user.
- *(Illustrative real-world apps mentioned in the context of testing rigor: Facebook, Google+, ChatGPT, Bard, WhatsApp, Signal.)*

### 10.2 Categories of Defects (by impact/urgency)
1. **Blocker / Show Stopper** — completely blocks further testing/usage.
2. **Critical** — major functionality broken.
3. **Medium** — moderate impact.
4. **Cosmetic / Minor / Trivial** — e.g., spelling mistakes, alignment issues, wrong validation message wording, wrong color.

### 10.3 What a Good Defect Report Includes
- **Defect Title**
- **Reproduction Steps**
- **Evidence** — screenshot, video recording
- **Where it's failing:** which browser (web), which OS, which device, which user story, build version, software version

### 10.4 Defect Attribute Template
```
BUG ID
TITLE
REPORTED BY
USER STORY NUMBER / TITLE
DATE REPORTED
SUMMARY
URL
SCREENSHOT / VIDEO RECORDING
PLATFORM
OPERATING SYSTEM
BUILD VERSION (e.g., 23.34.0)
SOFTWARE VERSION
BROWSER
STEPS TO REPRODUCE
EXPECTED RESULT
ACTUAL RESULT
DEFECT SEVERITY (S1–S4)
DEFECT PRIORITY (P1–P4)
ASSIGNED TO
STATUS
RESOLUTION
DATE OF FIX
NOTES
```

### 10.5 Severity vs Priority
- **Severity** = how badly end users are affected by the defect (S1 = most severe → S4 = least).
- **Priority** = how *soon* the defect needs to be fixed (P1 = fix immediately → P4 = fix whenever).
- These are **independent** of each other — a defect can be high severity but low priority, or vice versa.

**Real examples:**
```
Login is not working                          → S1, P1
Buzz Module – can't post images                → S2, P2

D1 → S1, P1
D2 → S4, P1
D3 → S2, P2
D4 → S1, P4
D5 → S2, P3
```
(Note: D2 and D4 show that severity and priority don't always move together — e.g., a cosmetic issue (S4) might still be flagged P1 if it's client-visible on a demo, while a severe backend issue (S1) might be deprioritized (P4) if a workaround exists.)

### 10.6 Defect Life Cycle (Bug Life Cycle) — Full Flow

```
New / Open / Submitted
        ↓
    Assigned  (assigned to a developer)
        ↓
    In Progress  (developer starts fixing)
        ↓
  Fixed / Resolved
        ↓
  Pending to Retest  (new build given for retesting)
        ↓
    Verified  (tester confirms fix works)
        ↓
     Closed
```

**Alternate paths:**
- **Reopen** — if, after verification, the tester finds it's *still* not working → goes back into the cycle.
- **Rejected / Not a Bug** — if the developer determines (from New/Open → Assigned stage) that it isn't actually a defect.
- **Deferred** — if the developer doesn't have time to fix it now, it gets pushed to an upcoming sprint/release.

### 10.7 Handling Disputed Defects
**If a developer refuses to accept your reported defect:**
1. Show the reference/proof from the EPIC, Feature, User Story, discussion notes, or Design docs to the developer.
2. Set up a call involving the Developer **and** the Product Owner.
3. Explain the defect in that call.
4. If the PO confirms it's a valid defect → developer must fix it.
5. If not → it stays **Rejected**.

### 10.8 Special Defect Scenarios

**"A defect was closed in a previous sprint, but I'm seeing the same issue again — what do I do?"**
→ Do **not** reopen the old (closed) defect. Report it as a **brand-new** defect instead.

**"I missed a defect in QA and it leaked to Production — what happened, and what do I do?"**
→ Possible causes: it worked in QA but not in Production due to missing configuration, invalid/different data used, huge data volume differences in Production, or an environment mismatch.
→ Also possible: the scenario wasn't covered by an existing test case earlier — going forward, add a new test case for it, and update the test case document.

**Intermittent Issue**
→ A defect that does **not** appear consistently — it only shows up sometimes.

### 10.9 Environment Pipeline
```
Dev → QA → Pre-Prod → UAT → Prod
   (or)
Dev → QA → Staging → Cert → Prod
```

### 10.10 Other Key Defect Terms
- **Hotfix** — a critical defect found in Production is fixed and released urgently, with high priority, outside the normal release cycle.
- **Defect Leakage** — a defect that was **not** caught in a lower environment (like QA) but was found in Production.
- **Defect Triage / Bug Triage (Troubleshooting)** — after a tester reports a defect, the developer sets up a call with the tester to understand it in more detail and find the root cause. The tester must be ready to **reproduce** the defect live for the developer.
- **RCA (Root Cause Analysis)** — the developer investigates and documents *why* the defect occurred, as part of the defect record.
- **Defect Density** = Number of Defects ÷ Size of the Software.

### 10.11 When Do We Start Automation?
- Once a feature/user story is **stable** (not changing frequently), the team moves to writing **automation scripts** for it.
- Example scale: a single user story might have 45 test cases; the Smoke suite might have 45 test cases; the Regression suite can range from **400 to 2,400** test cases (or more, e.g., up to 3000 as mentioned elsewhere).
- **Playwright** is mentioned as an automation tool used for this.

---

## PART 11: TEST CLOSURE & METRICS

### 11.1 Test Closure Deliverables
- **Test Report**
- **Defect Report**
- **RTM (Requirement Traceability Matrix)** — ensures full test coverage by mapping user stories to test cases and defects.

**Sample RTM structure:**
| S.No | User Story Title | Test Case Count | Type of Tests | Defects |
|---|---|---|---|---|
| 1 | Login | 8 | Functional | 0 |
| 2 | Add Employee | (varies) | Functional | (varies) |

### 11.2 Software Testing Metrics — Formulas & Examples

| Metric | Formula | Worked Example |
|---|---|---|
| % of Test Execution Completed | (Executed ÷ Total) × 100 | 400 ÷ 800 × 100 = **50%** |
| Pass Percentage | (Passed ÷ Total) × 100 | 760 ÷ 800 × 100 = **95%** |
| Failed Test Case % | (Failed ÷ Total Executed) × 100 | — |
| Critical Defects Percentage | (Critical Defects ÷ Total Defects) × 100 | 4 ÷ 40 × 100 = **10%** |
| Deferred Defects Percentage | (Deferred Defects ÷ Total Defects) × 100 | — |

- A **Test Report** can also be auto-generated (especially in automation tooling) and typically summarizes execution %, pass %, and defect stats.

---

## PART 12: RESUME, PROJECTS & INTERVIEW PREP

### 12.1 Skills to List
- Backend/API Testing
- Manual Testing
- Automation Testing (e.g., Playwright)

### 12.2 Sample "Real Projects" to Mention on a Resume
1. **E-commerce project** — modeled on a site like industrybuying.com ("FactoryCart" as an example project name).
2. **OrangeHRM** — an HR management system (example client context: "Vedanta").
3. **Swift** — Automotive domain project (example clients: Toyota, KIA).
4. **Insurance domain project.**
5. **Philips (with L&T)** — an IoT-based project.
6. **MPF (Maddie's Pet Forum)** — modeled after a Facebook-like social platform for an animal welfare society (USA), focused on pets.

*(Note: Always work under an NDA — Non-Disclosure Agreement — when discussing real client project details, e.g., in a company like L&T.)*

### 12.3 What Recruiters Typically Ask
- Total years of experience
- Relevant experience
- Current CTC
- Expected CTC (e.g., current 6.5 LPA → expected 8.5–9 LPA)
- Notice Period (NP) — e.g., 30 days, or reduced to 15 days

### 12.4 What Interviewers Test You On (Manual Testing Round — Typical Areas)
- Which tool you used: Rally, Jira, etc.
- Which methodology: Agile/Scrum
- Sprint duration
- Team size and structure
- How many environments used
- Project scope
- Whether you used a Test Plan (and if a template was provided)
- Where test cases were written/stored, and the template used
- What application you tested and how it's useful (its purpose)
- User personas
- How you did reporting (test reports, defect reports)
- (For API round) Which tool for API testing, API documentation used
- (For Automation round) Which language, version control (VC) used, CI/CD used

### 12.5 Full Project Description Template (fill this in for each project on your resume)
```
Project Name:
Client:
Domain of the Project:
Purpose of the Project:
How it is useful to end users:
Who will use this software (personas):
Important features:
Roles and Responsibilities:
```

---

## PART 13: API TESTING (BACKEND TESTING) — FULL DETAIL

### 13.1 What Is an API?
**API = Application Programming Interface.** Every application (web or mobile) has a backend, and the frontend/UI talks to that backend through APIs.
```
Backend (server) ← API → UI (frontend)
```

### 13.2 Types of Testing Performed Through APIs
1. Functional Testing
2. Performance Testing
3. Security Testing

### 13.3 Common API Testing Tools
Postman, Bruno, Swagger, K6, Karate, Rest Assured, Insomnia.

### 13.4 HTTP Methods
| Method | Purpose |
|---|---|
| GET | If the API is *getting/reading* data from the server |
| POST | If the API is *creating* a new resource on the server |
| PUT | *Modifying* an existing resource — replaces the **entire** resource; can modify multiple items at a time |
| PATCH | *Modifying* an existing resource — updates only the **specific field(s)** given |
| DELETE | *Deleting* a resource from the server |

**PUT vs PATCH — worked example:**
```
Original person object:
{ firstname: "Roopa", lastname: "H", place: "Chennai", DOB: "12/12/2003", Gender: "female" }

PUT request (replaces the entire object):
{ firstname: "Roopa", lastname: "H", place: "Blr", DOB: "10/12/2001", Gender: "female" }
```

### 13.5 The 6 Things You Need to Send an API Request
1. **API URL**
2. **HTTP Method**
3. **Params** (query parameters)
4. **Authorization** (e.g., Bearer token)
5. **Headers** (e.g., cookies)
6. **Request Body / Payload**

### 13.6 Real API Examples (OrangeHRM Demo Site)

**API 1 — Get All Employees**
```
URL: https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees
     ?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent
     &sortField=employee.firstName&sortOrder=ASC
Method: GET
Params: limit, offset, model, includeEmployees, sortField, sortOrder
Authorization: NA
Headers: cookie orangehrm=<session cookie>
Body: NA
```

**API 2 — Get Job Titles**
```
URL: .../api/v2/admin/job-titles?limit=50&offset=0&sortField=jt.jobTitleName&sortOrder=ASC
Method: GET
Verified: response body ✓, status code ✓, response time ✓ → PASS
```

**API 3 — Create Employee**
```
URL: .../api/v2/pim/employees
Method: POST
Body: { "firstName": "Raju", "middleName": "", "lastName": "G", 
        "empPicture": null, "employeeId": "87654" }
```

**API 4 — Update Employee's Personal Details**
```
URL: .../api/v2/pim/employees/238/personal-details
Method: PUT
Path Param: EmpNumber = 235
Body: { "lastName": "E", "firstName": "Spoorthi", "middleName": "XYZ", 
        "employeeId": "87654", "otherId": "9876", 
        "drivingLicenseNo": "1234567", "drivingLicenseExpiredDate": "2026-09-16",
        "gender": "1", "maritalStatus": "Married", "birthday": "2026-05-13", 
        "nationalityId": 3 }
```

### 13.7 CRUD (Create, Read, Update, Delete) — Team Assignment Example
```
Roopa      → Add / Edit / Get / Delete Paygrade
Ruthvik    → Add / Edit / Get / Delete Employment Status
Koushal    → Add / Edit / Delete / Comment / Like — Buzz Post
Hanumanth  → CRUD — Job Categories
Harshitha  → CRUD — Work Shifts
Latha      → CRUD — User Management
Spoorthi   → Punch In / Punch Out / My Records
```

### 13.8 What to Verify in Every API Response
1. **Response Status** (e.g., 200)
2. **Response Body**
3. **Response Time**
4. *(Optional)* Response Size

### 13.9 HTTP Status Codes — Full Reference

| Range | Category | Common Codes |
|---|---|---|
| 1xx (100–199) | Informational | — |
| 2xx (200–299) | Success | 200 OK, 201 Created, 204 No Content |
| 3xx (300–399) | Redirection | — |
| 4xx (400–499) | Client-side errors | 400 Bad Request, 401 Unauthorized, 402 Payment Required, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Content |
| 5xx (500–599) | Server-side errors | 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable |

**By operation:**
- GET → 200 OK
- POST → 201 Created
- PUT / PATCH / DELETE → 200 OK

**401 vs 403 (important distinction):**
- **401 Unauthorized** — the server doesn't know who the client is (missing/invalid credentials).
- **403 Forbidden** — the server *does* know who the client is, but that client doesn't have permission to access the resource.

**Response time reference:** 1000 ms = 1 second.

### 13.10 API Access Methods
```
API access via: Wire / Internet
Web services access: Internet
Manual API testing: Postman
Automated API testing: scripted (code-based)
```
Same principle applies as UI testing: there's Manual and Automation testing for APIs too.

### 13.11 URL Structure Terminology
```
Protocol:    https://
Base URL:    https://opensource-demo.orangehrmlive.com
Endpoint:    /web/index.php/api/v2/pim/employees
Query Params: ?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent
              &sortField=employee.firstName&sortOrder=ASC
Path Params: /web/index.php/api/v2/pim/employees/{empNumber}/personal-details
```

### 13.12 Postman — Key Features
- **Workspace** — create a separate workspace per project; the entire workspace can be shared with the team.
- **Collections** — segregate API requests by module/feature; you can create folders inside collections to group requests further; collections can be exported/imported; you can run an entire collection at once.
- **Variables:**
  - **Global variables** — accessible across *all* collections in the workspace.
  - **Collection-level variables** — accessible only within that specific collection.
  - **Priority rule:** if the same variable name exists at both levels, the **collection-level value wins** over the global value.
    ```
    Example: global x = 30, collection x = 45 → {{x}} resolves to 45 within that collection.
    ```
- **Environment variables** — store the base URL as a variable so it can be swapped per environment:
  ```
  DEV     → (dev URL)
  QA      → www.qa.com
  Pre-Prod → www.preprod.com
  UAT     → www.uat.com

  Usage: {{baseURL}}/web/index.php/api/v2/pim/employees
  ```

---

## APPENDIX: QUICK GLOSSARY

| Term | Meaning |
|---|---|
| SDLC | Software Development Life Cycle |
| STLC | Software Testing Life Cycle |
| FRS | Functional Requirement Specification |
| HLD / LLD | High-Level Design / Low-Level Design |
| SPOC | Single Point of Contact |
| PO / BA | Product Owner / Business Analyst |
| SM | Scrum Master |
| DoD | Definition of Done |
| RTM | Requirement Traceability Matrix |
| UAT | User Acceptance Testing |
| CRUD | Create, Read, Update, Delete |
| SP | Story Point |
| KT | Knowledge Transfer |
| RCA | Root Cause Analysis |
| CI/CD | Continuous Integration / Continuous Deployment |
| API | Application Programming Interface |

---

*These are complete, detailed notes covering every topic and real-world example from the original class material — organized part-by-part instead of condensed, for full revision and interview preparation.*
