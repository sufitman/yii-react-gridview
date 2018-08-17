import {Component} from 'react'

class TableCell extends Component {
  setSort = (e) => {
    e.preventDefault();
    let sort;
    if (!this.props.cell.sort) {
      sort = 'ASC';
    } else if (this.props.cell.sort === 'ASC') {
      sort = 'DESC';
    } else {
      sort = null;
    }
    this.props.setSort(e.target.getAttribute('data-column'), sort);
  }
  render() {
    let cell = this.props.cell;
    if (cell.value) {
      cell = cell.value;
      if (cell.enableSorting) {
        cell = <a className={ cell.sort } onClick={ this.setSort } data-column={ cell.column }>
          { cell }
        </a>;
      }
    }
    return <td>{ cell }</td>;
  }
}

export default TableCell;