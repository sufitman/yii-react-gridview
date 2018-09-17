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

  _prepareContent = (cellOptions) => {
    if (typeof cellOptions.rule === 'function') {
      return cellOptions.rule(cellOptions.cellData, cellOptions.rowId);
    }
    if (cellOptions.rule === 'serial' && cellOptions.idx !== undefined) {
      return this.props.currentPage * this.props.pageSize + 1 + cellOptions.idx;
    }
    if (cellOptions.rule === 'checkbox' && (this.props.rowSelect || this.props.allRowsSelect)) {
      return {
        type: 'checkbox',
        selectionChange: (checked) => {
          if (cellOptions.rowId !== undefined) {
            this.props.rowSelect && this.props.rowSelect(cellOptions.rowId, checked);
          } else {
            this.props.allRowsSelect && this.props.allRowsSelect(checked);
          }
        },
        checked: cellOptions.checked,
      }
    }
    return cellOptions.cellData;
  };
  
  render() {
    let content = this.props.content;
    if (content.value) {
      if (content.enableSorting) {
        content = <SortLink { ...content } setSort={ this.props.setSort }/>;
      } else {
        if (typeof content.value === 'object') {
          content = this._prepareContent(content.value)
        } else {
          content = content.value;
        }
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