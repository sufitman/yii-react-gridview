/* @flow */
import * as React from 'react';
import Row from './Row';
import type { FilterOptions, FilterCell, Columns, Filters } from "../../GridView";
import { PageContext } from "../../contexts/PageContext";
import { ContentContext } from "../../contexts/ContentContext";

type ApplyFilter = (column: string, value: mixed) => void;
type FilterProps = {
  id: string,
  applyFilter: ApplyFilter,
}

export default class Filter extends React.Component<FilterProps> {
  id: string;
  constructor(props: FilterProps) {
    super(props);
    this.id = `filter-${this.props.id}`;
  }
  _renderFilters = (tableId: string, columns: Columns, filters: Filters) => {
    let readyFilters = { row: {}, isFilter: true };
    Object.keys(columns).forEach((columnName) => {
      readyFilters.row[columnName] = this._prepareFilter(columnName, filters[columnName], tableId);
    });
    return readyFilters;
  };
  _getFieldName = (column: string, tableId: string): string => {
    return `search-${tableId}-${column}`;
  };
  _renderFilter = (column: string, type: string, tableId: string, options: FilterOptions = {}) => {
    const name = this._getFieldName(column, tableId);
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
  _prepareFilter = (column: string, filter: FilterCell, tableId: string) => {
    if (!filter) {
      return null;
    }
    if (typeof filter === 'string') {
      return this._renderFilter(column, filter, tableId);
    }
    if (typeof filter === 'object') {
      return this._renderFilter(column, filter.type, tableId, filter.options || {});
    }
    if (typeof filter === 'function') {
      return filter(this._getFieldName(column, tableId), this.applyFilter);
    }
    throw new Error('Invalid filter param');
  };
  applyFilter = (e: SyntheticInputEvent<*>) => {
    let column = e.target.name.split('-').pop();
    let value = (e.target.type === 'checkbox' && e.target.checked.toString()) || e.target.value;
    this.props.applyFilter(column, value);
  };
  render(): React.Node {
    return <ContentContext.Consumer>
      {
        ({ columns, filters })=> <PageContext.Consumer>
          {
            ({ tableId }) => <Row
              data={ this._renderFilters(tableId, columns, filters) }
              id={this.id}
              key={this.id}
            />
          }
        </PageContext.Consumer>
      }
    </ContentContext.Consumer>;
  }
}
