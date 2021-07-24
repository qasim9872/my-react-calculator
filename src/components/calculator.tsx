import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';

import { KEYS, OPERATOR, OPERATORS } from '../constants/operators';
import { isOperator } from '../utils/calculator.utils';
import { useCalculator } from '../hooks/use-calculator';

export const Calculator: React.FC = () => {
  const [value, setValue] = useState(0);
  const [lastOperator, setLastOperator] = useState<OPERATOR>();
  const [operator, setOperator] = useState<OPERATOR>();
  const [numberOfOperations, setNumberOfOperations] = useState(0);
  const { currentValue, ...operations } = useCalculator();

  useEffect(() => {
    if (!operator) return;

    let operatorToUse = operator;
    if (operator === OPERATORS.EQUAL) {
      console.log(
        `calculating final answer - will use last operator ${lastOperator}`
      );
      operatorToUse = lastOperator;
    }

    console.log(`executing operation for: ${operatorToUse}`);
    const operation = operations[operatorToUse];
    if (!operation) {
      throw new Error(`no operation found for ${operatorToUse}`);
    }

    console.log(`${currentValue} ${operatorToUse} ${value}`);
    operation(value);

    // reset value
    setValue(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator, numberOfOperations]);

  useEffect(() => {
    if (operator === OPERATORS.EQUAL) {
      console.log(`displaying final answer`);
      setValue(currentValue);
    }
  }, [currentValue, operator]);

  const onKeyPressed = (key: string) => {
    console.log(`user pressed: ${key}`);

    if (isOperator(key)) {
      operator && setLastOperator(operator);
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
