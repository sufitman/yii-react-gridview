import {Component} from 'react'
import TableRow from './TableRow';
import TableFilter from './TableFilter';

class TableHeader extends Component {
  constructor(props) {
    super(props);
    this.id = `th-${this.props.tableId}`;
  }

  render() {
    let filtersRow = this.props.filters
      ? <TableFilter filters={ this.props.filters } tableId={ this.props.tableId } onFilterChange={ this.props.onFilterChange }/>
      : '';
    return <thead>
    <TableRow
      cells={this.props.headerCells}
      options={this.props.options}
      id={this.id}
      key={this.id}
    />
    { filtersRow }
    </thead>;
  }
}

export default TableHeader;