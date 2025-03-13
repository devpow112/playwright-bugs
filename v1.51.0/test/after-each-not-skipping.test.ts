import { test as base } from '@playwright/test';

type Fixtures = {
    dummy: void;
};

const test = base.extend<Fixtures>({
    dummy: [async ({ }, use, testInfo) => {
        if (testInfo.title === 'skipped') {
            testInfo.skip();
        }

        await use();
    }, { auto: true }]
});

test.beforeAll(() => {
    console.log('beforeAll');
});

test.beforeEach(() => {
    console.log('beforeEach');
});

test('run 1', () => {
    console.log('test');
});

test('skipped', () => {
    console.log('test');
});

test('run 2', () => {
    console.log('test');
});

test.afterEach(() => {
    console.log('afterEach');
});

test.afterAll(() => {
    console.log('afterAll');
});
