import type { Dispatch, SetStateAction } from 'react';

export interface TimeDefinition {
  minutes: number;
  seconds: number;
}

/* Utils */

export type Dispatcher<T> = Dispatch<SetStateAction<T>>;
