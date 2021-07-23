import React from 'react';

export const CalculatorScreen: React.FC<{ symbol?: string; value?: string }> =
  ({ symbol = '', value = '0' }) => (
    <div className="bg-ui-secondary-100 flex justify-between border-4 my-4 p-2 border-gray-600 w-72 text-4xl">
      <span>{symbol}</span>

      <span>{value}</span>
    </div>
  );
