/* @flow */
import * as React from 'react';
import Cell from './cell';
import type { Columns, Sort } from "../../GridView";
import { ContentContext } from "../../contexts/ContentContext";

type RowProps = {
  id: string,
  notSetText: string,
  options?: {},
  data: RowOptions,
};
type RowOptions = {row: {}, idx?: string, rowId?: string, checked?: boolean, isTh?: boolean, isFilter?: boolean };

export default class Row extends React.Component<RowProps> {
  static defaultProps = {
    notSetText: '',
  };
  
  _prepareData = (rowOptions: RowOptions, columns: Columns, sort: Sort): Array<any> => {
    let readyRow = [];
    Object.keys(columns).forEach(column => {
      let cell = {
        value: {
          cellData: rowOptions.row[column],
          idx: rowOptions.idx,
          rowId: rowOptions.rowId,
          rule: columns[column],
          checked: rowOptions.checked,
        },
        isFilter: rowOptions.isFilter,
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
              isFilter: rowOptions.isFilter,
              column,
            };
          }
          cell.sort = sort[column]
        } else {
          let title = column.replace(/([A-Z])/g, ' $1');
          cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
        }
      }

      if (!cell) {
        cell = this.props.notSetText;
      }
      readyRow.push(cell);
    });

    return readyRow;
  };

  render(): React.Node {
    return <ContentContext.Consumer>
      {
        ({ columns, sort }) => <tr { ...this.props.options }>
          {
            this._prepareData(this.props.data, columns, sort).map(
              (cell, idx) => <Cell key={ `${this.props.id}-td-${idx}` } content={ cell }/>
            )
          }
        </tr>
      }
    </ContentContext.Consumer>;
  }
}
