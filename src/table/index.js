import React, {Component} from 'react';
import Caption from './components/Caption';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class Table extends Component {
  static defaultProps = {
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
    filterDelay: 3,
    notSetText: '(not set)',
    emptyCaption: 'Nothing found', 
  }

  _prepareCell = (cell, idx, rule) => {
    if (typeof rule === 'function') {
      return rule(cell, idx);
    }
    if (rule === 'serial') {
      return this.props.currentPage * this.props.pageSize + 1 + idx;
    }
    // ToDo improve formatting logic
    return cell;
  };

  _prepareRow = (row, idx, isTh = false) => {
    let readyRow = [];
    for (let column in this.props.columns) {
      let cell = this._prepareCell(row[column], idx, this.props.columns[column]);
      if (isTh) {
        if (this.props.headerCells && this.props.headerCells[column]) {
          cell = this.props.headerCells[column];
          if (typeof cell === 'string') {
            cell = {
              value: cell,
              enableSorting: true,
              column: column,
              sort: this.props.sort[column]
            };
          }
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
    let tableContent, somethingFound = true;
    if (this.props.data && this.props.data.length) {
      tableContent = [<Body
        data={ this.props.data.map((item, idx) => this._prepareRow(item, idx)) }
        options={ this.props.rowOptions }
        tableId={ this.props.tableId }
        key={ `tbody-${this.props.tableId}` }
      />];
    } else {
      tableContent = [];
      somethingFound = false;
    }

    if (this.props.showHeader) {
      tableContent.unshift(<Header
        headerCells={ this._prepareRow(this.props.headerCells, null, true) }
        options={ this.props.headerRowOptions }
        tableId={ this.props.tableId }
        filters={ this.props.filters ? this._prepareFilters() : null }
        onFilterChange={ this.props.onFilterChange }
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