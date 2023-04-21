export const isPresent = <T>(value: T ): boolean => {
  if (!value) return false;
  if (value && value.length > 0) {
    return true;
  }
}
