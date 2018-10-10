/* @flow */
import * as React from 'react';
import Row from './Row';
import type {FilterProps, FilterOptions, ApplyFilter} from "../../flow-typed/gridViewLibDef";

export default class Filter extends React.Component<FilterProps> {
  id: string;
  constructor(props: FilterProps) {
    super(props);
    this.id = `filter-${this.props.id}`;
  }
  _renderFilters = () => {
    let readyFilters = { row: {} };
    Object.keys(this.props.columns).forEach((columnName) => {
      readyFilters.row[columnName] = this._prepareFilter(columnName, this.props.filters[columnName]);
    });
    return readyFilters;
  };
  _getFieldName = (column: string): string => {
    return `search-${this.props.tableId}-${column}`;
  };
  _renderFilter = (column: string, type: string, options: FilterOptions = {}) => {
    const name = this._getFieldName(column);
    let filterOptions = { ...options, onChange: this.applyFilter };
    switch (type) {
      case 'text': {
        let textInputOptions = { className: 'form-control', name, type, ...filterOptions };
        return <input { ...textInputOptions } />;
      }
      case 'checkbox':
        return <input { ...{ name, type } } { ...filterOptions } />;
      case 'select': {
        let opts = [];
        if (!filterOptions.data) {
          throw new Error('Filter select has no options');
        }
        let idx = 0;
        for (let val in filterOptions.data) {
          opts.push(<option key={ `${name}-${idx++}` } value={ val }>{ filterOptions.data[val] }</option>);
        }
        delete filterOptions.data;
        return <select name={ name } { ...filterOptions }>
          {opts}
        </select>;
      }
    }
    return null;
  };
  _prepareFilter = (column: string, filter: (string | FilterOptions | ApplyFilter) = null) => {
    if (!filter) {
      return '';
    }
    if (typeof filter === 'string') {
      return this._renderFilter(column, filter);
    }
    if (typeof filter === 'object') {
      return this._renderFilter(column, filter.type, filter.options || {});
    }
    if (typeof filter === 'function') {
      return filter(this._getFieldName(column), this.applyFilter);
    }
    throw new Error('Invalid filter param');
  };
  applyFilter = (e: SyntheticInputEvent<>) => {
    let column = e.target.name.split('-').pop();
    let value = (e.target.type === 'checkbox' && e.target.checked.toString()) || e.target.value;
    this.props.applyFilter(column, value);
  };
  render(): React.Node {
    return <Row
      data={ this._renderFilters() }
      id={this.id}
      columns={ this.props.columns }
      key={this.id}
    />;
  }
}
