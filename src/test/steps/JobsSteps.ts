// src/test/steps/JobsSteps.ts
import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CareersPage } from '../pages/CareersPage';
import config from '../config/config.json';
import { CustomWorld } from '../support/world';

setDefaultTimeout(30 * 1000);

let careersPage: CareersPage;

Given('Open the Careers page', async function (this: CustomWorld) {
  careersPage = new CareersPage(this.page);
  await careersPage.open(config.careersUrl);
});

When('I retrieve the list of all open job titles', async function (this: CustomWorld) {
  this.jobTitles = await careersPage.getJobTitles();
});

Then('I should see at least one job title that contains the word {string}', async function (this: CustomWorld, keyword: string) {
  const matchingJobs = this.jobTitles.filter(title =>
    title.toLowerCase().includes(keyword.toLowerCase())
  );

  console.log(`Jobs containing "${keyword}": ${matchingJobs.length}`);
  matchingJobs.forEach(title => console.log(` - ${title}`));

  expect(matchingJobs.length, `No job titles contain "${keyword}"`).toBeGreaterThan(0);
});