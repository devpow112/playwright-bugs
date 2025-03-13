import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './test/',
    testMatch: 'after-each-not-skipping.test.ts'
});
