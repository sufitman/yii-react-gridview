import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.id = `tf-${this.props.tableId}`;
  }

  static propTypes = {
    tableId: PropTypes.string,
    footerCells: PropTypes.array,
    columns: PropTypes.object,
  }

  render() {
    let row = {}
    Object.keys(this.props.columns).forEach((column, idx) => {
      row[column] = this.props.footerCells[idx];
    })
    return <tfoot>
      <Row
        data={ { row } }
        key={ this.id } id={ this.id }
        columns={ this.props.columns }
      />
    </tfoot>;
  }
}

export default Footer;