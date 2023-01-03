export default function getStudentsByLocation(array, city) {
  if (array instanceof Array) {
    return array.filter((loc) => loc.location === city);
  }
  return [];
}
