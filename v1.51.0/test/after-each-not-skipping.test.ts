import { test as base } from '@playwright/test';

type Fixtures = {
    dummy: void;
};

const test = base.extend<Fixtures>({
    dummy: [async ({ }, use, testInfo) => {
        testInfo.skip();

        await use();
    }, { auto: true }]
});

test.beforeAll(() => {
    console.log('beforeAll');
});

test.beforeEach(() => {
    console.log('beforeEach');
});

test('skipped', () => {
    console.log('test');
});

test.afterEach(() => {
    console.log('afterEach');
});

test.afterAll(() => {
    console.log('afterAll');
});
