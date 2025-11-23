// src/test/support/world.ts
import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from 'playwright';

// Define the shape of your World
export class CustomWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;
    jobTitles: string[] = [];
    // attach will be injected by Cucumber at runtime
    attach!: (data: Buffer | string, mediaType: string) => void;

}

// Register this class as the World constructor
setWorldConstructor(CustomWorld);
