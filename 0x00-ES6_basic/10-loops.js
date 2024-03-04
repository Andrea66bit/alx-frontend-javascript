export default function appendToEachArrayValue(array, appendString) {
  // eslint-disable-next-line no-restricted-syntax
  for (const value of array) {
    // eslint-disable-next-line no-param-reassign
    array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
