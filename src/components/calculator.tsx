import React from 'react';
import classNames from 'classnames';

import { CalculatorScreen } from './ui/calculator-screen';
import { CalculatorKeypad } from './ui/calculator-keypad';
import { KEYS } from '../constants/operators';

export const Calculator: React.FC = () => (
  <div
    className={classNames(
      'bg-ui-primary border-4 border-gray-600 h-3/6 w-80',
      'flex flex-col justify-between items-center'
    )}
  >
    <CalculatorScreen />

    <CalculatorKeypad keys={KEYS} keyPressed={(key) => console.log(key)} />
  </div>
);
