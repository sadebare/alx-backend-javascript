export default function getStudentIdsSum(array) {
  if (array instanceof Array) {
    return array.reduce((prevalue, curvalue) => prevalue.id || prevalue + curvalue.id, 0);
  }
  return 0;
}
