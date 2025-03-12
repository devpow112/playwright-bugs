import { defineConfig, devices } from '@playwright/test';
import { minutes, seconds } from './helpers/timing.ts';

export default defineConfig({
    testDir: './test/',
    fullyParallel: true,
    forbidOnly: true,
    retries: 2,
    workers: 3,
    reporter: [
        ['list'],
        ['blob'],
        ['./reporter.ts'],
    ],
    use: {
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
        actionTimeout: seconds(10),
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
    expect: {
        timeout: seconds(10),
        toPass: {
            timeout: seconds(25),
            intervals: [seconds(2), seconds(3), seconds(5), seconds(5), seconds(5), seconds(10)],
        },
    },
    globalTimeout: minutes(60),
});
