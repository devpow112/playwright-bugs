  export default class Reporter {
    onTestEnd(test) {
        const { parent } = test; // parent will be a suite
        const project = parent.project(); // should get the root project

        if (project === undefined) {
            throw new Error('\'project\' is not defined');
        } else {
            console.log('\'project\' is defined');
        }
    }
}
