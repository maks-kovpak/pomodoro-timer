import { createContext, useState } from 'react';
import type { Dispatcher, TimeDefinition } from '../lib/types';

interface TimerContextConfig {
  time: TimeDefinition;
  setTime: Dispatcher<TimeDefinition>;
  isBreak: boolean;
  setIsBreak: Dispatcher<boolean>;
}

export const TimerContext = createContext<TimerContextConfig>({
  time: { minutes: 25, seconds: 0 },
  setTime: () => {},
  isBreak: false,
  setIsBreak: () => {},
});

const TimerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [time, setTime] = useState<TimeDefinition>({ minutes: 25, seconds: 0 });
  const [isBreak, setIsBreak] = useState<boolean>(false);

  return (
    <TimerContext.Provider value={{ time, setTime, isBreak, setIsBreak }}>
      {children}
    </TimerContext.Provider>
  );
};

export default TimerProvider;
