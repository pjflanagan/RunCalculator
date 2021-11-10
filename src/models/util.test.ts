import assert from 'assert';

import { Loop } from './util';

const ARR_IN: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

describe('models/util.ts', function () {
  describe('Loop', function () {
    describe('get', function () {
      type TestData = [string[], number, string];

      const td: TestData[] = [
        [ARR_IN, 0, 'a'],
        [ARR_IN, -1, 'g'],
        [ARR_IN, ARR_IN.length, 'a'],
        [ARR_IN, ARR_IN.length + 3, 'd'],
        [ARR_IN, -10, 'e']
      ];

      td.forEach(([arrIn, index, expectedValue]) => {
        it(`arr[${index}] should be ${expectedValue}`, function () {
          assert.equal(Loop.get(arrIn, index), expectedValue);
        });
      });
    });

    describe('getRange', function () {
      type TestData = [string, string[], number, number, string[]];

      const td: TestData[] = [
        [
          `return whole range starting with 'd'`,
          ARR_IN,
          10,
          100,
          ['d', 'e', 'f', 'g', 'a', 'b', 'c']
        ],
        [`return normal range`, ARR_IN, 1, 3, ['b', 'c', 'd']],
        [`return range from negative`, ARR_IN, -2, 4, ['f', 'g', 'a', 'b']],
        [`return range through length`, ARR_IN, ARR_IN.length - 2, 4, ['f', 'g', 'a', 'b']]
      ];

      td.forEach(([name, arrIn, index, range, expectedValue]) => {
        it(`should ${name}`, function () {
          assert.deepEqual(Loop.getRange(arrIn, index, range), expectedValue);
        });
      });
    });

    describe('getCenteredArray', function () {
      type TestData = [string[], number, number, string[]];

      const td: TestData[] = [
        [ARR_IN, 4, 5, ['c', 'd', 'e', 'f', 'g']],
        [ARR_IN, 1, 5, ['g', 'a', 'b', 'c', 'd']],
        [ARR_IN, ARR_IN.length - 1, 5, ['e', 'f', 'g', 'a', 'b']]
      ];

      td.forEach(([arrIn, index, range, expectedArrOut]) => {
        it(`should return array centered at '${Loop.get(arrIn, index)}'`, function () {
          assert.deepEqual(Loop.getCenteredArray(arrIn, index, range), expectedArrOut);
        });
      });
    });
  });
});
