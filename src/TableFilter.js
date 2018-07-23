import {Component} from 'react'
import TableRow from './TableRow';

class TableFilter extends Component {
  constructor(props) {
    super(props);
    this.applyFilters = this.applyFilters.bind(this);
    this.state = {
      filters: {}
    };
  }
  _renderFilters() {
    let readyFilters = [];
    for (let column in this.props.filters) {
      let filter = this.props.filters[column];
      readyFilters.push(this._prepareFilter(column, filter));
    }
    return readyFilters;
  }
  _getFieldName(column) {
    return `search-${this.props.tableId}-${column}`;
  }
  _renderFilter(column, type, options = {}) {
    const name = this._getFieldName(column);
    switch (type) {
      case 'text':
        return <input name={ name } type="text" {...options} onChange={ this.applyFilters } />;
      case 'checkbox':
        return <input name={ name } type="checkbox" {...options} onChange={ this.applyFilters } />;
      case 'select':
        let opts = [];
        if (!options.data) {
          throw new Error('Filter select has no options');
        }
        let idx = 0;
        for (let val in options.data) {
          opts.push(<option key={ `${name}-${idx++}` } value={val}>{options.data[val]}</option>);
        }
        return <select name={this._getFieldName(column)} onChange={ this.applyFilters }>{opts}</select>
    }
    return null;
  }
  _prepareFilter(column, filter = null) {
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
  }
  applyFilters(e) {
    let filters = Object.assign({}, this.state.filters);
    filters[e.target.name] = e.target.value;
    this.setState({filters: filters}, () => this.props.onFilterChange(this.state.filters));
  }
  render() {
    return <TableRow
      cells={ this._renderFilters() }
      id={this.id}
      key={this.id}
    />;
  }
}

export default TableFilter;