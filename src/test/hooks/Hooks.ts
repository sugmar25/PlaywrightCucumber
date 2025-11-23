// src/test/hooks/Hooks.ts
import { Before, After, ITestCaseHookParameter, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { CustomWorld } from '../support/world';

setDefaultTimeout(60 * 1000);

Before(async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false, channel: 'chrome' });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario: ITestCaseHookParameter) {
    try {
        if (scenario.result?.status === 'FAILED' && this.page) {
            fs.mkdirSync('screenshots', { recursive: true });

            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');

            // ✅ sanitize scenario name: remove quotes and other invalid chars
            const safeName = scenario.pickle.name
                .replace(/\s+/g, '_')
                .replace(/[^a-zA-Z0-9_-]/g, '');

            const screenshotName = `${safeName}_${timestamp}.png`;
            const screenshotPath = path.join('screenshots', screenshotName);

            await this.page.screenshot({ path: screenshotPath, fullPage: true });
            console.log(`📸 Screenshot saved: ${screenshotPath}`);

            this.attach(fs.readFileSync(screenshotPath), 'image/png');
        }
    } catch (err) {
        console.error('⚠️ Failed to capture screenshot:', err);
    } finally {
        if (this.browser) {
            await this.browser.close();
            console.log('🛑 Browser closed after scenario');
        }
    }

}
);