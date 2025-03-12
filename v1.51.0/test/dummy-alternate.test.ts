import { test } from '@playwright/test';
import { seconds, sleep } from '../helpers/timing.ts';

test.describe('dummy suite, alternate', () => {
    test.beforeAll(async () => { await sleep(seconds(5)); });

    test.beforeEach(async () => { await sleep(seconds(5)); });

    for (let i = 0; i < 20; i++) {
        test(`dummy test ${i + 1}`, async ({ }, testInfo) => {
            await sleep(seconds(30));
        });
    }

    test.afterEach(async () => { await sleep(seconds(5)); });

    test.afterAll(async () => { await sleep(seconds(5)); });
});
