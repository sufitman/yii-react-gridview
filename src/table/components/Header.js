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
    headerCells: PropTypes.object,
    options: PropTypes.object,
    columns: PropTypes.object,
    setSort: PropTypes.func,
    allRowsChecked: PropTypes.bool,
    allRowsSelect: PropTypes.func,
    sort: PropTypes.object,
  }

  filterTimeout = null;

  render() {
    let tableHeader = [<Row
      data={ {
        row: this.props.headerCells,
        idx: 0,
        isTh: true,
        checked: this.props.allRowsChecked,
      } }
      options={ this.props.options }
      columns={ this.props.columns }
      sort={ this.props.sort }
      allRowsSelect={ this.props.allRowsSelect }
      id={ this.id }
      key={ this.id }
      setSort={ this.props.setSort }
    />];
    if (this.props.filters) {
      tableHeader.push(<Filter
        key={ `${this.id}-filters` }
        id={ this.id }
        sort={ this.sort }
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