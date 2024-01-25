const getRootParent = (test) => {
	if (test.parent && test.parent.parent) {
		return getRootParent(test.parent);
	}

	return test;
};

export default class Reporter {
	onTestEnd(test) {
		const rootParent = getRootParent(test);
		const project = rootParent.project();

		const { use } = project;

		if (Object.keys(use).length === 0) {
			throw new Error('\'use\' is empty object');
		} else {
            console.log('\'use\' not empty object');
		}
	}
}
