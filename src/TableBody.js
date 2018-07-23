import {Component} from 'react'
import TableRow from './TableRow';


class TableBody extends Component {
  render() {
    return <tbody>
    {this.props.data.map((item, idx) => {
      let id = `tr-${this.props.tableId}-${idx}`;
      return <TableRow
        cells={item}
        options={this.props.options}
        id={id}
        key={id}
      />
    })}
    </tbody>;
  }
}

export default TableBody;