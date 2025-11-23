# Careers Page Test Automation (Playwright + Cucumber + TypeScript)

## 📖 Overview
This project automates validation of job listings on the [osapiens Careers page](https://careers.osapiens.com/).

### What the test does
- Loads the website: `https://careers.osapiens.com/`
- Prints the number of open jobs in the console
- Checks and **fails** the test if none of the job titles contain the word **"Quality"**
- Passes if at least one job title contains **"Quality"**

---

## 🚀 Commands

### Run tests normally
```bash
npx cucumber-js --format pretty

Project Structure
src/
 └── test/
      ├── features/        # Gherkin feature files (e.g., Careers.feature)
      ├── hooks/           # Global hooks for setup/teardown (Hooks.ts)
      ├── pages/           # Page Object classes (CareersPage.ts)
      ├── steps/           # Step definitions (JobsSteps.ts)
      ├── support/         # Cucumber world and shared context (world.ts, world.d.ts)
      └── config/          # Config file (config.json)
screenshots/               # Failure screenshots captured during test runs
reports/                   # Test execution reports (e.g., HTML, JSON)
.github/                   # GitHub workflows and CI/CD configuration
README.md                  # Project documentation
package.json               # Dependencies and scripts
tsconfig.json              # TypeScript configuration
cucumber.json              # CucumberJS configuration