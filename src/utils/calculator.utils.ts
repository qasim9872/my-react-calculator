import { OPERATOR_VALUES, OPERATOR } from '../constants/operators';

export const isOperator = (key: string): key is OPERATOR =>
  OPERATOR_VALUES.includes(key as any);
