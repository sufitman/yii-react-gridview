/* @flow */
import * as React from 'react';
import SelectionCheckbox from './content/SelectionCheckbox';
import SortLink from './content/SortLink';
import type { CellProps, CellOptions, SortLinkProps, SelectionCheckboxProps } from "../../../flow-typed/gridViewLibDef";

export default class Cell extends React.Component<CellProps> {
  _prepareContent = (cellOptions: CellOptions) => {
    if (typeof cellOptions.rule === 'function') {
      return cellOptions.rule(cellOptions.cellData, cellOptions.rowId);
    }
    if (cellOptions.rule === 'serial' && cellOptions.idx !== undefined) {
      return this.props.currentPage * this.props.pageSize + 1 + cellOptions.idx;
    }
    if (cellOptions.rule === 'checkbox' && (this.props.rowSelect || this.props.allRowsSelect)) {
      return {
        type: 'checkbox',
        selectionChange: (checked: boolean) => {
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
  
  render(): React.Node {
    let content: SortLinkProps | SelectionCheckboxProps = this.props.content;
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
    if (typeof content === 'object' && content.type) {
      if (content.type === 'checkbox') {
        content = <SelectionCheckbox { ...content }/>;
      }
    }

    return <td>{ content }</td>;
  }
}
