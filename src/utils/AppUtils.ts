export function getTestID(testID: string) {
    if (!testID) {
        return 'undefined';
      }
    let appPrefix = 'lakeshore';
    const prefix = `${appPrefix}:id/`;
    const hasPrefix = testID.startsWith(prefix);
    return !hasPrefix ? `${prefix}${testID}` : testID;
  }