/* @flow */
import * as React from 'react';
import Row from './Row';
import { PageContext } from "../../contexts/PageContext";

type BodyProps = {
  data: Array<{[col: string | number]: any}>,
  options: {},
  rowIdColumn: string,
}

export default class Body extends React.Component<BodyProps> {
  static defaultProps = {
    options: {},
  };
  render(): React.Node {
    return <PageContext.Consumer>{
      ({ tableId, selectedRowIds }) => {
        let content = [];
        let preparedData = {};
        this.props.data.forEach((item, idx) => {
          let rowId = item[this.props.rowIdColumn] || idx;
          if (['string', 'number'].indexOf(typeof rowId) === -1) {
            throw new Error('Invalid type of rowId');
          }
          preparedData[rowId] = {
            row: item,
            rowId,
            idx,
            checked: selectedRowIds.indexOf(rowId) !== -1
          };
        });
        for (let rowId in preparedData) {
          content.push(<Row
            data={ preparedData[rowId] }
            options={ this.props.options }
            id={ rowId }
            key={ `tr-${tableId}-${rowId}` }
          />);
        }
        return <tbody>{ content }</tbody>;
      }
    }</PageContext.Consumer>;
  }
}
