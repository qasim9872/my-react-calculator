import { OPERATOR_VALUES, OPERATORS, OPERATOR } from '../constants/operators';

export const isOperator = (key: string): key is OPERATOR =>
  OPERATOR_VALUES.includes(key as any);

export const OPERATOR_MAP = {
  [OPERATORS.ADDITION]: (result: number, value: number) => result + value,
  [OPERATORS.SUBTRACTION]: (result: number, value: number) => result - value,
  [OPERATORS.MULTIPLICATION]: (result: number, value: number) => result * value,
  [OPERATORS.DIVISION]: (result: number, value: number) => result / value,
  [OPERATORS.EQUAL]: (result: number, value: number) => result,
};
