import { Browser, BrowserContext, Page } from 'playwright';

declare module '@cucumber/cucumber' {
    interface World {
        browser: Browser;
        context: BrowserContext;
        page: Page;
        jobTitles: string[];
    }
}