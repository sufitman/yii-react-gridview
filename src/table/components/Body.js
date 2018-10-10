/* @flow */
import * as React from 'react';
import Row from './Row';
import type { BodyProps } from "../../flow-typed/gridViewLibDef";

export default class Body extends React.Component<BodyProps> {
  static defaultProps = {
    options: {},
    selectedRowIds: [],
  };
  render(): React.Node {
    let content = [];
    let preparedData = {};
    this.props.data.forEach((item, idx) => {
      let rowId = item[this.props.rowIdColumn] || idx;
      preparedData[rowId] = {
        row: item,
        rowId,
        idx,
        checked: this.props.selectedRowIds.indexOf(rowId) !== -1
      };
    });
    for (let rowId in preparedData) {
      content.push(<Row
        currentPage={ this.props.currentPage }
        rowSelect={ this.props.rowSelect }
        pageSize={ this.props.pageSize }
        data={ preparedData[rowId] }
        options={ this.props.options }
        columns={ this.props.columns }
        id={ rowId }
        key={ `tr-${this.props.tableId}-${rowId}` }
      />);
    }
    return <tbody>{ content }</tbody>;
  }
}
