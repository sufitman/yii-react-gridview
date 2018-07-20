import {Component} from 'react'
import TableCaption from './TableCaption';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import TableFilter from './TableFilter';
import Pager from './Pager';

class GridView extends Component {
  constructor(props) {
    super(props)
    this.id = require('random-string')();
    this.showHeader = this.props.showHeader || true;
    this.showFooter = this.props.showFooter || false;
    this.placeFooterAfterBody = this.props.placeFooterAfterBody || false;
    this.options = this.props.options || {className: 'grid-view'};
    this.captionOptions = this.props.captionOptions || {};
    this.headerRowOptions = this.props.headerRowOptions || {};
    this.footerRowOptions = this.props.footerRowOptions || {};
    this.rowOptions = this.props.rowOptions || {};
    this.tableOptions = this.props.tableOptions || {
      className: [
        'table',
        'table-striped',
        'table-bordered'
      ].join(' ')
    };
    this.notSetText = this.props.notSetText || '(not set)';
    this.filters = this.props.filters || null;
  }

  _prepareCell(cell, rule) {
    if (typeof rule === 'function') {
      return rule(cell)
    }
    // ToDo improve formatting logic
    return cell;
  }

  _prepareRow(row, isTh = false) {
    let readyRow = [];
    for (let column in this.props.columns) {
      let cell;
      if (row[column]) {
        cell = this._prepareCell(row[column], this.props.columns[column]);
      } else {
        if (isTh) {
          console.log(column);
          let title = column.replace(/([A-Z])/g, " $1");
          console.log(title);
          cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
        } else {
          cell = this.notSetText
        }
      }
      readyRow.push(cell)
    }
    return readyRow;
  }

  _prepareFilters() {
    let filters = {};
    for (let column in this.props.columns) {
      filters[column] = this.filters[column] || null;
    }
    return filters;
  }

  render() {
    let tableContent = [<TableBody
      data={ this.props.data.map(item => this._prepareRow(item)) }
      options={ this.rowOptions }
      tableId={ this.id }
      key={ `tbody-${this.id}` }
    />];
    if (this.showHeader) {
      tableContent.unshift(<TableHeader
        headerCells={ this._prepareRow(this.props.headerCells, true) }
        options={ this.headerRowOptions }
        tableId={ this.id }
        filters={ this.filters ? this._prepareFilters() : null }
        onFilterChange={ this.props.onFilterChange }
        key={ `thead-${this.id}` }
      />);
    }
    if (this.props.caption) {
      tableContent.unshift(<TableCaption text={ this.props.caption } options={ this.captionOptions } key={ `tcaption-${this.id}` }/>);
    }
    if (this.showFooter) {
      let footer = <TableFooter footerCells={ ['d', 'e', 'f'] } options={ this.footerRowOptions } tableId={ this.id }/>;
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return <div { ...this.options }>
      <table { ...this.tableOptions }>
        { tableContent }
      </table>
      <Pager/>
    </div>;
  }
}

export default GridView;