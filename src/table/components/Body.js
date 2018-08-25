import React, {Component} from 'react';
import Row from './Row';
import PropTypes from 'prop-types';

class Body extends Component {
  static propTypes = {
    tableId: PropTypes.string,
    data: PropTypes.object,
    options: PropTypes.object,
  }
  static defaultProps = {
    options: {},
  }
  render() {
    let content = [];
    for (let rowId in this.props.data) {
      content.push(<Row
        cells={ this.props.data[rowId] }
        options={ this.props.options }
        id={ rowId }
        key={ `tr-${this.props.tableId}-${rowId}` }
      />);
    }
    return <tbody>{ content }</tbody>;
  }
}

export default Body;