import React, {Component} from 'react';
import Row from './Row';
import Filter from './Filter';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor(props) {
    super(props);
    this.id = `th-${this.props.tableId}`;
  }

  static propTypes = {
    tableId: PropTypes.string,
    onFilterChange: PropTypes.func,
    filterDelay: PropTypes.number,
    headerCells: PropTypes.array,
    options: PropTypes.object,
    filters: PropTypes.object,
    setSort: PropTypes.func,
  }

  filterTimeout = null;
  filterChanged = (filters) => {
    if (this.filterTimeout) {
      clearTimeout(this.filterTimeout);
    }
    this.filterTimeout = setTimeout(() => this.props.onFilterChange(filters), this.props.filterDelay * 1000);
  };

  render() {
    let tableHeader = [<Row
      cells={ this.props.headerCells }
      options={ this.props.options }
      id={ this.id }
      key={ this.id }
      setSort={ this.props.setSort }
    />];
    if (this.props.filters) {
      tableHeader.push(<Filter
        key={ `${this.id}-filters` }
        id={ this.id }
        filters={ this.props.filters }
        tableId={ this.props.tableId }
        onFilterChange={ this.filterChanged }
      />);
    }
    return <thead>{ tableHeader }</thead>;
  }
}

export default Header;