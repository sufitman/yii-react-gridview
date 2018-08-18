import React, {Component} from 'react';
import Cell from './Cell';

class Row extends Component {
  render() {
    let optionalProps = {};
    if (this.props.setSort) {
      optionalProps['setSort'] = this.props.setSort;
    }
    return <tr { ...this.props.options }>
      { this.props.cells.map((cell, idx) => <Cell
        key={ `${this.props.id}-td-${idx}` }
        content={ cell }
        { ...optionalProps }/>) }
    </tr>;
  }
}

export default Row;