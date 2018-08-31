import React, {Component} from 'react';
import Caption from './components/Caption';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class Table extends Component {
  static defaultProps = {
    data: [],
    headerCells: {},
    footerCells: [],
    captionOptions: {},
    tableOptions: {},
    showHeader: true,
    showFooter: false,
    headerRowOptions: {},
    footerRowOptions: {},
    rowOptions: {},
    filters: null,
    filterDelay: 1,
    notSetText: '(not set)',
    emptyCaption: 'Nothing found',
    allRowsChecked: false
  }

  _prepareCellData = (cellOptions) => {
    if (typeof cellOptions.rule === 'function') {
      return cellOptions.rule(cellOptions.cellData, cellOptions.rowId);
    }
    if (cellOptions.rule === 'serial') {
      return this.props.currentPage * this.props.pageSize + 1 + cellOptions.idx;
    }
    if (cellOptions.rule === 'checkbox' && this.props.rowSelect) {
      return {
        type: 'checkbox',
        selectionChange: (checked) => {
          if (cellOptions.rowId !== undefined) {
            this.props.rowSelect(cellOptions.rowId, checked);
          } else {
            this.props.allRowsSelect(checked);
          }
        },
        checked: cellOptions.checked,
      }
    }
    return cellOptions.cellData;
  };

  _prepareRowData = (rowOptions) => {
    let readyRow = [];
    for (let column in this.props.columns) {
      let cell = this._prepareCellData({
          cellData: rowOptions.row[column],
          idx: rowOptions.idx,
          rowId: rowOptions.rowId,
          rule: this.props.columns[column],
          checked: rowOptions.checked,
      });
      if (rowOptions.isTh && column !== 'checkbox') {
        if (rowOptions.row[column]) {
          cell = rowOptions.row[column];
          if (typeof cell === 'string') {
            cell = {
              value: cell,
              enableSorting: true,
              column: column,
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

  _prepareFilters = () => {
    let filters = {};
    for (let column in this.props.columns) {
      filters[column] = this.props.filters[column];
    }
    return filters;
  };

  render() {
    let tableContent = [];
    let somethingFound = true;
    if (this.props.data.length) {
      let preparedData = {};
      this.props.data.forEach((item, idx) => {
        let rowId = item[this.props.rowIdColumn] || idx;
        preparedData[rowId] = this._prepareRowData({
          row: item,
          rowId,
          idx,
          checked: this.props.selectedRowIds.indexOf(rowId) !== -1
        });
      });
      tableContent.push(<Body
        data={ preparedData }
        options={ this.props.rowOptions }
        tableId={ this.props.tableId }
        key={ `tbody-${this.props.tableId}` }
      />);
    } else {
      somethingFound = false;
    }

    if (this.props.showHeader) {
      tableContent.unshift(<Header
        headerCells={ this._prepareRowData({
          row: this.props.headerCells,
          idx: 0,
          isTh: true,
          checked: this.props.allRowsChecked,
        }) }
        options={ this.props.headerRowOptions }
        tableId={ this.props.tableId }
        filters={ this.props.filters ? this._prepareFilters() : null }
        applyFilter={ this.props.applyFilter }
        filterDelay={ this.props.filterDelay }
        key={ `thead-${this.props.tableId}` }
        setSort={ this.props.setSort }
      />);
    }
    if (this.props.caption || !somethingFound) {
      let captionProps = {
        options: this.props.captionOptions,
        key: `tcaption-${this.props.tableId}`,
        text: somethingFound ? this.props.caption : this.props.emptyCaption
      };
      tableContent[somethingFound ? 'unshift' : 'push'](<Caption { ...captionProps }/>);
    }
    if (this.props.showFooter) {
      let footer = <Footer
        footerCells={ this.props.footerCells }
        options={ this.props.footerRowOptions }
        tableId={ this.props.tableId }
        key={ `tfoot-${this.props.tableId}` }
      />;
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return (
      <table { ...this.props.tableOptions }>
        { tableContent }
      </table>
    );
  }
}

export default Table;