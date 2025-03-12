import { test } from '@playwright/test';


test.describe('reporter tests 1', () => {
    let i = 0;

    while(i < 3) {
        test(`test ${i}`, () => { });

        i++;
    }
});
