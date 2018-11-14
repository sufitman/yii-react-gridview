/* @flow */
import * as React from 'react';

export const AllRowsSelectContext = React.createContext((checked: boolean) => {
  throw new Error('"allRowsSelect" callback is not specified');
});