import { useMemo } from 'react';

import { breakTheme, focusTheme } from '../lib/theme';
import { useTimer } from '../stores/timer';

export const useTheme = () => {
  const { isBreak } = useTimer();

  return useMemo(() => {
    return isBreak ? breakTheme : focusTheme;
  }, [isBreak]);
};
