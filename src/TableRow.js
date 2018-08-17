import {Component} from 'react'
import TableCell from './TableCell'

class TableRow extends Component {
  render() {
    let optionalProps = {};
    if (this.props.setSort) {
        optionalProps['setSort'] = this.props.setSort;
    }
    return <tr { ...this.props.options }>
      { this.props.cells.map((cell, idx) => <TableCell
        key={ `${this.props.id}-td-${idx}` }
        cell={ cell }
        { ...optionalProps }/>) }
    </tr>;
  }
}

export default TableRow;