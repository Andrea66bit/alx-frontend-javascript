export default function appendToEachArrayValue(array, appendstring) {
  const arr = [];
  for (const idx of array) {
    const value = idx;
    arr.push(appendingString + value);
  }

  return arr;
}
