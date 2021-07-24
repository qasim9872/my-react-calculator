import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';

import { KEYS, OPERATOR, OPERATORS } from '../constants/operators';
import { isOperator } from '../utils/calculator.utils';

export const Calculator: React.FC = () => {
  const [value, setValue] = useState(0);
  const [calculatorString, setCalculatorString] = useState('');
  const [operator, setOperator] = useState<OPERATOR>();
  const [numberOfOperations, setNumberOfOperations] = useState(0);

  useEffect(() => {
    if (!operator) return;

    console.log(`in first use effect hook`);

    if (operator === OPERATORS.CLEAR) {
      console.log(`clearing screen value`);

      setCalculatorString('');
      setValue(0);
      setOperator(null);
      return;
    }

    console.log(`updating calculator string`);

    setCalculatorString((previousCalculatorString) => {
      const calculatorStringArray = [];

      console.log({ previousCalculatorString });
      if (previousCalculatorString) {
        calculatorStringArray.push(previousCalculatorString);
      }

      calculatorStringArray.push(value);
      calculatorStringArray.push(operator);

      console.log(`setting calculator string`, calculatorStringArray);

      return calculatorStringArray.join('');
    });

    console.log(`resetting screen value`);
    setValue(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator, numberOfOperations]);

  useEffect(() => {
    if (operator === OPERATORS.EQUAL) {
      console.log(`evaluating final result`, calculatorString);
      // eslint-disable-next-line no-eval
      const result = eval(calculatorString);
      setValue(result);
    }
  }, [operator, calculatorString]);

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
      <CalculatorScreen
        operator={operator === OPERATORS.CLEAR ? '' : operator}
        value={value}
      />

      <CalculatorKeypad keys={KEYS} keyPressed={onKeyPressed} />
    </div>
  );
};
