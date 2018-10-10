/* @flow */
import * as React from 'react';
import Cell from './cell';
import type { RowProps, RowOptions } from "../../flow-typed/gridViewLibDef";

export default class Row extends React.Component<RowProps> {
  static defaultProps = {
    notSetText: '',
    sort: {},
  };
  
  _prepareData = (rowOptions: RowOptions) => {
    let readyRow = [];
    for (let column in this.props.columns) {
      let cell = {
        value: {
          cellData: rowOptions.row[column],
          idx: rowOptions.idx,
          rowId: rowOptions.rowId,
          rule: this.props.columns[column],
          checked: rowOptions.checked,
        },
        column
      };
      if (rowOptions.isTh && column !== 'checkbox') {
        if (rowOptions.row[column]) {
          cell = rowOptions.row[column];
          if (typeof cell === 'string') {
            cell = {
              value: cell,
              enableSorting: true,
              sort: undefined,
              column,
            };
          }
          cell.sort = this.props.sort[column]
        } else {
          let title = column.replace(/([A-Z])/g, ' $1');
          cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
        }
      }
      if (!cell) {
        cell = this.props.notSetText;
      }
      readyRow.push(cell);
    }
    return readyRow;
  };
  
  render(): React.Node {
    let optionalProps = {};
    if (this.props.setSort) {
      optionalProps['setSort'] = this.props.setSort;
    }
    return <tr { ...this.props.options }>
      { this._prepareData(this.props.data).map((cell, idx) => <Cell
        key={ `${this.props.id}-td-${idx}` }
        content={ cell }
        currentPage={ this.props.currentPage }
        pageSize={ this.props.pageSize }
        rowSelect={ this.props.rowSelect }
        allRowsSelect={ this.props.allRowsSelect }
        { ...optionalProps }
      />) }
    </tr>;
  }
}
