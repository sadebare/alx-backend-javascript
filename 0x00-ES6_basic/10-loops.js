export default function appendToEachArrayValue(array, appendString) {
  const newArr = [];
  for (var idx of array) {
    newArr.push(appendString + idx)
  }

  return newArr;
}
