import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';

import { KEYS, OPERATOR, OPERATORS } from '../constants/operators';
import { isOperator, OPERATOR_MAP } from '../utils/calculator.utils';

export const Calculator: React.FC = () => {
  const [displayResult, setDisplayResult] = useState(false);
  const [result, setResult] = useState(0);
  const [value, setValue] = useState(0);
  const [operator, setOperator] = useState<OPERATOR>();

  useEffect(() => {
    if (!operator) return;
    console.log(`executing operation for: ${operator}`);

    if (operator === OPERATORS.EQUAL) {
      setDisplayResult(true);
      return;
    }

    const operation = OPERATOR_MAP[operator];
    if (!operation) {
      throw new Error(`no operation found for ${operator}`);
    }

    setValue(0);
    setResult((previousResult) => operation(previousResult, value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator]);

  const onKeyPressed = (key: string) => {
    console.log(`user pressed: ${key}`);

    isOperator(key)
      ? setOperator(key)
      : setValue(Number(String(value) + String(key)));
  };

  return (
    <div
      className={classNames(
        'bg-ui-primary border-4 border-gray-600 h-3/6 w-80',
        'flex flex-col justify-between items-center'
      )}
    >
      <CalculatorScreen
        operator={operator}
        value={displayResult ? result : value}
      />

      <CalculatorKeypad keys={KEYS} keyPressed={onKeyPressed} />
    </div>
  );
};
