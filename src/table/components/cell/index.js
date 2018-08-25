import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SelectionCheckbox from './content/SelectionCheckbox';
import SortLink from './content/SortLink';

class Cell extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.object,
    ]),
    setSort: PropTypes.func,
  }
  
  render() {
    let content = this.props.content;
    if (content.value) {
      if (content.enableSorting) {
        content = <SortLink { ...content } setSort={ this.props.setSort }/>;
      } else {
        content = content.value;
      }
    }
    if (content.type) {
      if (content.type === 'checkbox') {
        content = <SelectionCheckbox { ...content }/>;
      }
    }
    return <td>{ content }</td>;
  }
}

export default Cell;