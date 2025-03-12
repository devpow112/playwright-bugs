import { test } from '@playwright/test';
import { minutes, sleep } from '../helpers/timing.ts';

test.describe('dummy suite', () => {
    test.beforeAll(async () => { await sleep(250); });

    test.beforeEach(async () => { await sleep(250); });

    for (let i = 0; i < 5; i++) {
        test(`dummy test ${i + 1}`, async ({ }, testInfo) => {
            if (testInfo.retry < 2) {
                await sleep(minutes(2));

                throw new Error('force retry');
            }

            await sleep();
        });
    }

    test.afterEach(async () => { await sleep(250); });

    test.afterAll(async () => { await sleep(250); });
});
