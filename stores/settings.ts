import { create } from 'zustand';

import type { TimeDefinition } from '../lib/types';

export interface SettingsStore {
  focusTime: TimeDefinition;
  breakTime: TimeDefinition;
  setFocusTime: (time: TimeDefinition) => void;
  setBreakTime: (time: TimeDefinition) => void;
}

export const useSettings = create<SettingsStore>((set) => ({
  focusTime: { minutes: 0, seconds: 10 },
  breakTime: { minutes: 0, seconds: 5 },
  setFocusTime: (time) => set({ focusTime: time }),
  setBreakTime: (time) => set({ breakTime: time }),
}));
