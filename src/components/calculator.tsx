import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';

import { KEYS, OPERATOR, OPERATORS } from '../constants/operators';
import { isOperator } from '../utils/calculator.utils';
import { useCalculator } from '../hooks/use-calculator';

export const Calculator: React.FC = () => {
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState<OPERATOR>();
  const [numberOfOperations, setNumberOfOperations] = useState(0);
  const { currentValue, ...operations } = useCalculator();

  useEffect(() => {
    if (!operator) return;
    console.log(`executing operation for: ${operator}`);

    const operation = operations[operator];
    if (!operation) {
      throw new Error(`no operation found for ${operator}`);
    }

    operation(value);

    // reset value
    setValue(0);

    if (operator === OPERATORS.EQUAL) {
      console.log(`calculating final answer`);
      setValue(currentValue);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator, numberOfOperations]);

  const onKeyPressed = (key: string) => {
    console.log(`user pressed: ${key}`);

    if (isOperator(key)) {
      setOperator(key);

      // updating this to trigger a rerun of the operator hook when the same operator is clicked multiple times
      setNumberOfOperations(
        (previousNumberOfOperations) => previousNumberOfOperations + 1
      );
    } else {
      setValue(Number(String(value) + String(key)));
    }
  };

  return (
    <div
      className={classNames(
        'bg-ui-primary border-4 border-gray-600 h-3/6 w-80',
        'flex flex-col justify-between items-center'
      )}
    >
      <CalculatorScreen operator={operator} value={value} />

      <CalculatorKeypad keys={KEYS} keyPressed={onKeyPressed} />
    </div>
  );
};
