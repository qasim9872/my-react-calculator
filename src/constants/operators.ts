export type OPERATOR = '+' | '-' | 'x' | '/' | '=' | 'C';

export const OPERATORS: { [key: string]: OPERATOR } = {
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: 'x',
  DIVISION: '/',
  CLEAR: 'C',
  EQUAL: '=',
};

export const OPERATOR_VALUES = Object.values(OPERATORS);

export const KEYS = [
  '7',
  '8',
  '9',
  OPERATORS.DIVISION,
  '4',
  '5',
  '6',
  OPERATORS.MULTIPLICATION,
  '1',
  '2',
  '3',
  OPERATORS.SUBTRACTION,
  OPERATORS.CLEAR,
  '0',
  OPERATORS.EQUAL,
  OPERATORS.ADDITION,
];
