import { useContext } from 'react';
import { TimerContext } from '../providers/TimerProvider';

export const useTimer = () => {
  return useContext(TimerContext);
};
