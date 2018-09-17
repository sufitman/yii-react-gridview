import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Body extends Component {
  static propTypes = {
    tableId: PropTypes.string,
    data: PropTypes.array,
    options: PropTypes.object,
    rowIdColumn: PropTypes.string,
    selectedRowIds: PropTypes.array,
    columns: PropTypes.object,
    rowSelect: PropTypes.func,
  }
  static defaultProps = {
    options: {},
  }
  render() {
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

export default Body;