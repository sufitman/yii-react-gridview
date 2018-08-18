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
  }

  render() {
    return <tfoot>
      <Row cells={ this.props.footerCells } key={ this.id } id={ this.id }/>
    </tfoot>;
  }
}

export default Footer;