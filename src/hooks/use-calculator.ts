import { useState } from 'react';
import { OPERATORS } from '../constants/operators';

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState(0);

  const OPERATOR_MAP = {
    [OPERATORS.ADDITION]: (num: number) =>
      setCurrentValue((previousValue) => previousValue + num),
    [OPERATORS.SUBTRACTION]: (num: number) =>
      setCurrentValue((previousValue) => previousValue - num),
    [OPERATORS.MULTIPLICATION]: (num: number) =>
      setCurrentValue((previousValue) => previousValue * num),
    [OPERATORS.DIVISION]: (num: number) =>
      setCurrentValue((previousValue) => previousValue / num),
    [OPERATORS.EQUAL]: () => null,
    [OPERATORS.CLEAR]: () => setCurrentValue(0),
  };

  return { currentValue, ...OPERATOR_MAP };
};
