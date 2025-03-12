import assert from 'node:assert';

export const seconds = (seconds: number): number => {
	assert(seconds > 0, `Input 'seconds' must be a positive number, got '${seconds}'`);

	return seconds * 1000;
};

export const minutes = (minutes: number): number => {
	assert(minutes > 0, `Input 'minutes' must be a positive number, got '${minutes}'`);

	return seconds(minutes * 60);
};

export const sleep = (milliseconds: number) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
};
