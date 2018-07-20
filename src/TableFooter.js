import {Component} from 'react'
import TableRow from './TableRow'

class TableFooter extends Component {
  constructor(props) {
    super(props);
    this.id = `tf-${this.props.tableId}`;
  }

  render() {
    return <tfoot>
    <TableRow cells={this.props.footerCells} key={this.id} id={this.id}/>
    </tfoot>;
  }
}

export default TableFooter;