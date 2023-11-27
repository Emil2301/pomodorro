export const ButtonTypes = {
  POMODORO: 'pomodoro',
  SHORT_BREAK: 'short break',
  LONG_BREAK: 'long break',
} as const;
export type ButtonTypesKey = keyof typeof ButtonTypes;
export type ButtonTypesValue = typeof ButtonTypes[keyof typeof ButtonTypes];