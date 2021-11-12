import assert from 'assert';

import { Time } from './time';
import { Error } from './error';


const makeTimeString = (displayTime: Time.DisplayTime) => {
  const [h1, m10, m1, s10, s1, d] = displayTime;
  return `${h1}:${m10}${m1}:${s10}${s1}.${d}`;
};

describe('models/time.ts', function () {
  describe('Time', function () {
    describe('makeDisplayTime', function () {
      type TestData = [number, Time.DisplayTime];

      const td: TestData[] = [
        [60, [0, 0, 1, 0, 0, '000', Error.NO_ERROR]],
        [122, [0, 0, 2, 0, 2, '000', Error.NO_ERROR]],
        [86400, [0, 0, 0, 0, 0, '000', Error.TIME_IS_TOO_LONG]],
        [90, [0, 0, 1, 3, 0, '000', Error.NO_ERROR]],
        [6490, [1, 4, 8, 1, 0, '000', Error.NO_ERROR]],
        [120.457, [0, 0, 2, 0, 0, '457', Error.NO_ERROR]]
      ];

      td.forEach(([timeIn, expectedDisplayTime]) => {
        const expectedDisplayTimeString = makeTimeString(expectedDisplayTime);
        it(`should return ${expectedDisplayTimeString}`, function () {
          const result = Time.makeDisplayTime(timeIn);
          assert.equal(makeTimeString(result), expectedDisplayTimeString);
          assert.equal(result[6], expectedDisplayTime[6]);
        });
      });
    });
  });
});
