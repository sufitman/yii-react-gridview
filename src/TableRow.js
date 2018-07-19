import { Component } from 'react'
import TableCell from './TableCell'

class TableRow extends Component {
    render() {
        return <tr { ...this.props.options }>
            { this.props.cells.map((cell, idx) => <TableCell
                key={ `${this.props.id}-td-${idx}` }
                cell={ cell} />) }
        </tr>;
    }
}

export default TableRow;