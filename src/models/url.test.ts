import assert from 'assert';
import { Distance } from '.';
import { URL } from './url';

const TEST_PARAMS = `?split=1K&timeIn=7601&paceMode=false&race=8K&distanceMode=true&distance=100&unit=k`;

describe('models/url.ts', function () {
  describe('URL', function () {
    describe('getParamOrDefault', function () {
      type TestData = [string, string, any, any];

      const td: TestData[] = [
        [TEST_PARAMS, 'race', Distance.getEvent(Distance.EventName.K5), Distance.getEvent(Distance.EventName.K8)],
        [TEST_PARAMS, 'split', Distance.getSplit(Distance.EventName.MILE), Distance.getSplit(Distance.EventName.K1)],
        [TEST_PARAMS, 'distanceMode', false, true],
        [TEST_PARAMS, 'unit', 'm', 'k'],
        [TEST_PARAMS, 'distance', 3, 100]
      ];

      td.forEach(([urlIn, paramName, defaultValue, expectedValue]) => {
        it(`should parse url for ${paramName}`, function () {
          const url = new URL(urlIn);
          assert.deepEqual(url.getParamOrDefault(paramName, defaultValue), expectedValue);
        });
      });
    });
  });
});
