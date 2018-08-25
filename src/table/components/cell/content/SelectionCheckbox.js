import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectionCheckbox extends Component {
  static propTypes = {
    type: PropTypes.string,
    checked: PropTypes.bool,
    selectionChange: PropTypes.func,
  }
  selectRow = (callback, e) => callback(e.target.checked);
  render() {
    return <input
      type={ this.props.type }
      checked={ this.props.checked }
      onChange={ this.selectRow.bind(this, this.props.selectionChange) }
    />;
  }
}

export default SelectionCheckbox;