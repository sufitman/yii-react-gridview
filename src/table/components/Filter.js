import React, {Component} from 'react';
import Row from './Row';

class Filter extends Component {
  constructor(props) {
    super(props);
    this.id = `filter-${this.props.id}`;
  }
  _renderFilters = () => {
    let readyFilters = [];
    this.props.columns.forEach((column) => {
      readyFilters.push(this._prepareFilter(column, this.props.filters[column]));
    });
    return readyFilters;
  };
  _getFieldName = (column) => {
    return `search-${this.props.tableId}-${column}`;
  };
  _renderFilter = (column, type, options = {}) => {
    const name = this._getFieldName(column);
    switch (type) {
      case 'text': {
        let textInputOptions = { className: 'form-control', ...options };
        return <input name={ name } type="text" { ...textInputOptions }  onChange={ this.applyFilter } />;
      }
      case 'checkbox':
        return <input name={ name } type="checkbox" {...options} onChange={ this.applyFilter } />;
      case 'select': {
        let opts = [];
        if (!options.data) {
          throw new Error('Filter select has no options');
        }
        let idx = 0;
        for (let val in options.data) {
          opts.push(<option key={ `${name}-${idx++}` } value={val}>{options.data[val]}</option>);
        }
        delete options.data;
        return <select name={ this._getFieldName(column) } onChange={ this.applyFilter } { ...options }>
          {opts}
        </select>;
      }
    }
    return null;
  };
  _prepareFilter = (column, filter = null) => {
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
      return filter(this._getFieldName(column));
    }
    throw new Error('Invalid filter param');
  };
  applyFilter = (e) => {
    let column = e.target.name.split('-').pop();
    this.props.applyFilter(column, e.target.value);
  };
  render() {
    return <Row
      cells={ this._renderFilters() }
      id={this.id}
      key={this.id}
    />;
  }
}

export default Filter;