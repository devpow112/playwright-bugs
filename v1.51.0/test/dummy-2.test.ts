import { test } from '@playwright/test';
import { minutes, seconds, sleep } from '../helpers/timing.ts';

test.describe('dummy 2', () => {
    test.beforeAll(async () => { await sleep(seconds(5)); });

    test.beforeEach(async () => { await sleep(seconds(5)); });

    for (let i = 0; i < 10; i++) {
        test(`test ${i + 1}`, async ({ }, testInfo) => {
            if (testInfo.retry < 2) {
                await sleep(seconds(5));

                throw new Error('force retry');
            }

            await sleep(minutes(1));
        });
    }

    test.afterEach(async () => { await sleep(seconds(5)); });

    test.afterAll(async () => { await sleep(seconds(5)); });
});
