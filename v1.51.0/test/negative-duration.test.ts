import { test } from '@playwright/test';
import { minutes, seconds, sleep } from '../helpers/timing.ts';

test.describe('negative duration', () => {
    test('long test', async ({ }, testInfo) => {
        testInfo.setTimeout(minutes(50));

        for (let i = 0; i < 8; i++) {
            console.log('\tRunning...');

            await sleep(minutes(5));
        }

        console.log('\tDone!');
    });
});
