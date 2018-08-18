import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Body extends Component {
  static propTypes = {
    tableId: PropTypes.string,
    data: PropTypes.array,
    options: PropTypes.object,
  }
  static defaultProps = {
    data: [],
    options: {},
  }
  render() {
    let content = this.props.data.map((item, idx) => {
      let id = `tr-${this.props.tableId}-${idx}`;
      return <Row
        cells={item}
        options={this.props.options}
        id={id}
        key={id}
      />;
    });
    return <tbody>{ content }</tbody>;
  }
}

export default Body;