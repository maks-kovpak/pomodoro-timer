/** Add a leading zero to a number if it is a single digit. */
export const withLeadingZero = (value: number): string => {
  return value.toString().padStart(2, '0');
};

/** Pause execution for a specified number of milliseconds. */
export const wait = async (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
