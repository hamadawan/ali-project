export const isPresent = <T>(value: T ): boolean => {
  return value !== null && value !== undefined && value !== '';
};
