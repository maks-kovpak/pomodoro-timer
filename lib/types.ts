export interface TimeDefinition {
  minutes: number;
  seconds: number;
}

/* Utils */

export type Dispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
