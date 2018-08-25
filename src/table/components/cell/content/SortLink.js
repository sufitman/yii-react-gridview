import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SortLink extends Component {
  static propTypes = {
    column: PropTypes.string,
    value: PropTypes.string,
    sort: PropTypes.string,
    setSort: PropTypes.func,
  }
  setSort = (e) => {
    e.preventDefault();
    let sort;
    if (!this.props.sort) {
      sort = 'ASC';
    } else if (this.props.sort === 'ASC') {
      sort = 'DESC';
    } else {
      sort = null;
    }
    this.props.setSort(e.target.getAttribute('data-column'), sort);
  }
  render() {
    return <a className={ this.props.sort } onClick={ this.setSort } data-column={ this.props.column }>
      { this.props.value }
    </a>;
  }
}

export default SortLink;