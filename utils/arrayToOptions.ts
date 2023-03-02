export function arrayToOptions(array: string[]) {
  return array.map((item) => ({ label: item, value: item }));
}
