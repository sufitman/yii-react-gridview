/* @flow */
import * as React from 'react';

export const PageContext = React.createContext({
  pageSize: 20,
  currentPage: 0,
  tableId: require('random-string')(),
  allRowsChecked: false,
  selectedRowIds: [],
});