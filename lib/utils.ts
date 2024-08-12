/**
 * Add a leading zero to a number if it is a single digit.
 */
export const withLeadingZero = (value: number): string => {
  return value.toString().padStart(2, '0');
};
