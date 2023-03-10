export const isEmpty = <T>(value: T[]) => {
  if (value === null || value === undefined) {
    return true;
  }
  if (value && value.length > 0) {
    return false
  }
  return null;
}