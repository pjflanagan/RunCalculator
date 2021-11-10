import assert from 'assert';

import { Time } from './time';

describe('models/time.ts', function () {
	describe('Time', function () {
		describe('makeDisplayTime', function () {
			type TestData = [number, Time.DisplayTime];

			const td: TestData[] = [
				[60, [0, 0, 1, 0, 0, '000']],
				[122, [0, 0, 2, 0, 2, '000']],
				[86400, [24, 0, 0, 0, 0, '000']],
				[90, [0, 0, 1, 3, 0, '000']],
				[6490, [1, 4, 8, 1, 0, '000']],
				[120.457, [0, 0, 2, 0, 0, '457']]
			];

			td.forEach(([timeIn, expectedDisplayTime]) => {
				const makeTimeString = (displayTime: Time.DisplayTime) => {
					const [h1, m10, m1, s10, s1, d] = displayTime;
					return `${h1}:${m10}${m1}:${s10}${s1}.${d}`;
				};
				const expectedDisplayTimeString = makeTimeString(expectedDisplayTime);
				it(`should return ${expectedDisplayTimeString}`, function () {
					assert.equal(makeTimeString(Time.makeDisplayTime(timeIn)), expectedDisplayTimeString);
				});
			});
		});
	});
});
