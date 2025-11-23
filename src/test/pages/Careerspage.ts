// src/test/pages/CareersPage.ts
// This class encapsulates all interactions with the Careers page.
// Following Page Object Model (POM) best practices.

import { Page } from 'playwright';

export class CareersPage {
    private page: Page;

    // Constructor receives Playwright's Page instance
    constructor(page: Page) {
        this.page = page;
    }

    /**
     * Navigate to the Careers page and validate the header.
     * @param url - The URL of the careers page (from config file).
     */
    async open(url: string): Promise<void> {
        await this.page.goto(url);

        // Wait until the header element is visible
        await this.page.waitForSelector('.careers-hero-block__title');

        // Validate header text
        const headerText = await this.page.textContent('.careers-hero-block__title');
        console.log("Header text:", headerText);

        if (!headerText?.includes("Careers")) {
            throw new Error(`Header validation failed. Found: ${headerText}`);
        }
    }

    /**
     * Retrieve all job titles from the job listings table.
     * @returns Array of job titles as strings.
     */
    async getJobTitles(): Promise<string[]> {
        const jobTitleElements = await this.page.$$('.rt-td.col-flex-grow-10 a.text-bold');
        const jobTitles: string[] = [];

        for (const el of jobTitleElements) {
            const text = (await el.textContent())?.trim() || '';
            jobTitles.push(text);
        }

        console.log(`Total jobs found: ${jobTitles.length}`);
        //To display the job title names, uncomment the line below.
        //jobTitles.forEach(title => console.log(` - ${title}`));

        return jobTitles;
    }
}