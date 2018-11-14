/* @flow */
import * as React from 'react';

export const ButtonContext = React.createContext({
  activePageCssClass: 'active',
  disabledPageCssClass: 'disabled',
  nextPageCssClass: 'next',
  prevPageCssClass: 'prev',
  firstPageCssClass: 'first',
  lastPageCssClass: 'last',
  pageTag: 'li',
});