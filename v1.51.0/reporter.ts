import type { FullResult, Reporter, TestCase, TestResult } from '@playwright/test/reporter';

export default class NegativeDurationReporter implements Reporter {
    onTestEnd(test: TestCase, result: TestResult) {
        const { duration } = result;

        if (duration < 0) {
            console.log(`Negative test duration!!!!!`);
        }
    }

    onEnd(result: FullResult) {
        const { duration } = result;

        if (duration < 0) {
            console.log(`Negative total duration!!!!!`);
        }
    }
}
