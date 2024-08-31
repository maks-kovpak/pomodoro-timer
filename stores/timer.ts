import { create } from 'zustand';

import { useSettings } from './settings';

import type { TimeDefinition } from '../lib/types';

export interface TimerStore {
  time: TimeDefinition;
  isBreak: boolean;
  setTime: (time: TimeDefinition) => void;
  setBreak: (isBreak: boolean) => void;
}

export const useTimer = create<TimerStore>((set) => ({
  time: useSettings.getState().focusTime,
  isBreak: false,
  setTime: (time: TimeDefinition) => set({ time }),
  setBreak: (isBreak: boolean) => set({ isBreak }),
}));
