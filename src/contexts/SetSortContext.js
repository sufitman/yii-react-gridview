/* @flow */
import * as React from 'react';
import type { SortVariant } from "../GridView";

export const SetSortContext = React.createContext((column: ?string, sort: ?SortVariant) => {
  throw new Error('"setSort" callback is not specified');
});