import {Component} from 'react'
import TableCaption from './TableCaption';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import Pager from './Pager';

class GridView extends Component {
  constructor(props) {
    super(props);
    this.id = require('random-string')();
    this._setDefault('showHeader', true);
    this._setDefault('showFooter', false);
    this._setDefault('placeFooterAfterBody', false);
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
    this.emptyCaption = this.props.emptyCaption || 'Nothing found';
    this.pagerSettings = {
      maxButtonCount: this.props.maxButtonCount || 10,
      pagerTag: this.props.pagerTag || 'ul',
      pageTag: this.props.pageTag || 'li',
      activePageCssClass: this.props.activePageCssClass || 'active',
      disabledPageCssClass: this.props.disabledPageCssClass || 'disabled',
      nextPageCssClass: this.props.nextPageCssClass || 'next',
      prevPageCssClass: this.props.prevPageCssClass || 'prev',
      firstPageCssClass: this.props.firstPageCssClass || 'first',
      lastPageCssClass: this.props.lastPageCssClass || 'last',
      nextPageLabel: this.props.nextPageLabel || '»',
      prevPageLabel: this.props.prevPageLabel || '«',
      firstPageLabel: this.props.firstPageLabel || null,
      lastPageLabel: this.props.lastPageLabel || null,
    }
    this.sort = {};
  }

  setSort = (column, sort) => {
    if (sort) {
      this.sort[column] = sort;
    } else {
      delete this.sort[column];
    }
    if (this.props.onSortChange) {
      this.props.onSortChange(this.sort);
    }
  }
  _setDefault = (prop, defaultValue) => {
    if (typeof this.props[prop] !== 'undefined') {
      this[prop] = this.props[prop];
    } else {
      this[prop] = defaultValue;
    }
  };

  _prepareCell = (cell, idx, rule) => {
    if (typeof rule === 'function') {
      return rule(cell, idx)
    }
    if (rule === 'serial') {
      return this.props.currentPage * this.props.pageSize + 1 + idx
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
                sort: this.sort[column] || null
              }
            }
          } else {
            let title = column.replace(/([A-Z])/g, " $1");
            cell = (title.charAt(0).toUpperCase() + title.slice(1)).replace(/_/g, ' ');
          }
      }
      if (!cell) {
        cell = this.notSetText
      }
      readyRow.push(cell)
    }
    return readyRow;
  };

  _prepareFilters = () => {
    let filters = {};
    for (let column in this.props.columns) {
      filters[column] = this.filters[column] || null;
    }
    return filters;
  };

  render() {
    let tableContent, somethingFound = true;
    if (this.props.data && this.props.data.length) {
      tableContent = [<TableBody
        data={ this.props.data.map((item, idx) => this._prepareRow(item, idx)) }
        options={ this.rowOptions }
        tableId={ this.id }
        key={ `tbody-${this.id}` }
      />];
    } else {
      tableContent = [];
      somethingFound = false;
    }

    if (this.showHeader) {
      tableContent.unshift(<TableHeader
        headerCells={ this._prepareRow(this.props.headerCells || {}, null, true) }
        options={ this.headerRowOptions }
        tableId={ this.id }
        filters={ this.filters ? this._prepareFilters() : null }
        onFilterChange={ this.props.onFilterChange }
        filterDelay={ this.props.filterDelay || 3 }
        key={ `thead-${this.id}` }
        setSort={ this.setSort }
      />);
    }
    if (this.props.caption || !somethingFound) {
      let captionProps = {
        options: this.captionOptions,
        key: `tcaption-${this.id}`,
        text: somethingFound ? this.props.caption : this.emptyCaption
      };
      tableContent[somethingFound ? 'unshift' : 'push'](<TableCaption { ...captionProps }/>);
    }
    if (this.showFooter) {
      let footer = <TableFooter footerCells={ ['d', 'e', 'f'] } options={ this.footerRowOptions } tableId={ this.id }/>;
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return <div { ...this.options }>
      <table { ...this.tableOptions }>
        { tableContent }
      </table>
      <Pager
        options={ this.props.pagerOptions }
        currentPage={ this.props.currentPage }
        totalCount={ this.props.totalCount }
        onButtonClick={ this.props.onPageButtonClick }
        pageSize={ this.props.pageSize || 20 }
        tableId={ this.id }
        settings={ this.pagerSettings }
      />
    </div>;
  }
}

export default GridView;