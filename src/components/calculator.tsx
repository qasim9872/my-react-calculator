import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';

import { KEYS, OPERATOR, OPERATORS } from '../constants/operators';
import { isOperator } from '../utils/calculator.utils';

export const Calculator: React.FC = () => {
  const [value, setValue] = useState(0);
  const [calculatorStringArray, setCalculatorStringArray] = useState([]);
  const [operator, setOperator] = useState<OPERATOR>();

  useEffect(() => {
    if (!operator) return;

    console.log(`in first use effect hook`);

    if (operator === OPERATORS.CLEAR) {
      console.log(`clearing screen value`);

      setValue(0);
      setOperator(null);
      setCalculatorStringArray([]);
      return;
    }

    console.log(`resetting screen value`);
    setValue(0);
  }, [operator]);

  useEffect(() => {
    console.log(`calculatorStringArray is`, calculatorStringArray);

    if (operator === OPERATORS.EQUAL) {
      console.log(`evaluating final result`, calculatorStringArray);

      const evalString = calculatorStringArray
        .filter((key) => key !== OPERATORS.EQUAL)
        .join('');

      console.log(`evaluating string`, evalString);

      // eslint-disable-next-line no-eval
      const result = eval(evalString);
      setValue(result);
    }
  }, [operator, calculatorStringArray]);

  const onKeyPressed = (key: string) => {
    console.log(`user pressed: ${key}`);

    if (isOperator(key)) {
      setOperator(key);
    } else {
      setValue(Number(String(value) + String(key)));
    }

    calculatorStringArray.push(key);
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
