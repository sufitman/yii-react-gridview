import { Component } from 'react'
import TableRow from './TableRow';

class TableHeader extends Component {
    constructor(props) {
        super(props);
        this.id = `th-${this.props.tableId}`;
    }
    render() {
        return <thead>
            <TableRow
                cells={ this.props.headerCells }
                options={ this.props.options }
                id={ this.id }
                key={ this.id }
            />
        </thead>;
    }
}

export default TableHeader;