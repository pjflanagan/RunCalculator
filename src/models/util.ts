// it's just an special array that's easy to loop
export const Loop = {
  get: <T>(values: T[], index: number): T => {
    // returns value at index including negatives
    if (index >= 0) {
      return values[index % values.length];
    }
    return Loop.get(values, values.length + index);
  },

  getRange: <T>(values: T[], index: number, range: number): T[] => {
    // retuns range starting at index
    const workingRange = Math.min(range, values.length);
    const arr = [];
    for (let i = 0; i < workingRange; i++) {
      arr.push(Loop.get(values, index + i));
    }
    return arr;
  },

  getCenteredArray: <T>(values: T[], index: number, range: number): T[] => {
    return Loop.getRange(values, index - Math.floor(range / 2), range);
  }
};
