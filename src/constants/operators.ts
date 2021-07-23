export type OPERATOR = '+' | '-' | 'x' | '/' | '=';

export const OPERATORS: { [key: string]: OPERATOR } = {
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: 'x',
  DIVISION: '/',
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
  '0',
  '.',
  OPERATORS.EQUAL,
  OPERATORS.ADDITION,
];
