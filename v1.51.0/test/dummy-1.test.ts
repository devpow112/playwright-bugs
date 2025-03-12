import { test } from '@playwright/test';
import { minutes, seconds, sleep } from '../helpers/timing.ts';

test.describe('dummy 1', () => {
    test.beforeAll(async () => { await sleep(seconds(5)); });

    test.beforeEach(async () => { await sleep(seconds(5)); });

    for (let i = 0; i < 10; i++) {
        test(`test ${i + 1}`, async ({ }) => {
            await sleep(minutes(2));
        });
    }

    test.afterEach(async () => { await sleep(seconds(5)); });

    test.afterAll(async () => { await sleep(seconds(5)); });
});
