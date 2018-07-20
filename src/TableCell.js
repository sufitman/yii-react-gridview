import {Component} from 'react'

class TableCell extends Component {
  render() {
    return <td>
      {this.props.cell}
    </td>;
  }
}

export default TableCell;