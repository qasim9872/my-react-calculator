import React from 'react';
import classNames from 'classnames';

export const CalculatorKey: React.FC<{
  keyToDisplay: string;
  keyValue: string;
  onClick: (value: string) => void;
}> = ({ keyToDisplay, keyValue, onClick }) => (
  <button
    className={classNames(
      'flex justify-center items-center border-4 border-gray-600',
      'text-white text-4xl hover:bg-gray-600 hover'
    )}
    onClick={() => onClick(keyValue)}
  >
    {keyToDisplay}
  </button>
);

export const CalculatorKeypad: React.FC<{
  keyPressed: (key: string) => void;
  keys: string[];
}> = ({ keyPressed, keys }) => (
  <div className="w-72 my-4 h-full grid grid-cols-4 gap-4">
    {keys.map((key) => (
      <CalculatorKey
        key={key}
        keyToDisplay={key}
        keyValue={key}
        onClick={(value) => keyPressed(value)}
      />
    ))}
  </div>
);
