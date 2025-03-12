import { defineConfig, devices } from '@playwright/test';
import { minutes, seconds } from './helpers/timing.ts';

export default defineConfig({
    testDir: './test/',
    testMatch: 'negative-duration.test.ts',
    fullyParallel: true,
    forbidOnly: true,
    retries: 2,
    workers: 1,
    reporter: [
        ['list'],
        ['./negative-duration-reporter.ts'],
    ],
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        timezoneId: 'America/New_York',
    },
    projects: [{
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
    }, {
        name: 'firefox',
        use: { ...devices['Desktop Firefox'] },
    }, {
        name: 'webkit',
        use: { ...devices['Desktop Safari'] },
    }],
    timeout: minutes(5),
    globalTimeout: minutes(60),
});
