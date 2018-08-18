import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Cell extends Component {
  static propTypes = {
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
      PropTypes.object,
    ]),
    setSort: PropTypes.func,
  }
  setSort = (e) => {
    e.preventDefault();
    let sort;
    if (!this.props.content.sort) {
      sort = 'ASC';
    } else if (this.props.content.sort === 'ASC') {
      sort = 'DESC';
    } else {
      sort = null;
    }
    this.props.setSort(e.target.getAttribute('data-column'), sort);
  }
  render() {
    let content = this.props.content;
    if (content.value) {
      if (content.enableSorting) {
        content = <a className={ content.sort } onClick={ this.setSort } data-column={ content.column }>
          { content.value }
        </a>;
      } else {
        content = content.value;
      }
    }
    return <td>{ content }</td>;
  }
}

export default Cell;