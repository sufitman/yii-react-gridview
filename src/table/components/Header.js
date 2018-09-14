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
    headerCells: PropTypes.array,
    options: PropTypes.object,
    columns: PropTypes.array,
    setSort: PropTypes.func,
  }

  filterTimeout = null;

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
        columns={ this.props.columns }
        tableId={ this.props.tableId }
        applyFilter={ this.props.applyFilter }
      />);
    }
    return <thead>{ tableHeader }</thead>;
  }
}

export default Header;