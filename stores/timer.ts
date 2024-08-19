import { create } from 'zustand';
import type { TimeDefinition } from '../lib/types';

export interface TimerStore {
  time: TimeDefinition;
  isBreak: boolean;
  setTime: (time: TimeDefinition) => void;
  setBreak: (isBreak: boolean) => void;
}

export const useTimer = create<TimerStore>((set) => ({
  time: { minutes: 25, seconds: 0 },
  isBreak: false,
  setTime: (time: TimeDefinition) => set({ time }),
  setBreak: (isBreak: boolean) => set({ isBreak }),
}));
