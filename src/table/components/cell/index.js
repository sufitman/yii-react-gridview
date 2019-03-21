/* @flow */
import * as React from 'react';
import SelectionCheckbox from './content/SelectionCheckbox';
import SortLink from './content/SortLink';
import { PageContext } from "../../../contexts/PageContext";
import { ContentContext } from "../../../contexts/ContentContext";

type CellProps = { content: any };
type CellRule = ((cell: mixed, rowId?: string, hoveredRowId?: any) => React.Node ) | 'serial' | 'checkbox';
type CellOptions = {
  rule: CellRule,
  cellData: any,
  rowId?: string,
  idx: number,
  checked?: boolean,
  hoveredRowId?: any
}

export default class Cell extends React.Component<CellProps> {
  _prepareContent = (cellOptions: CellOptions, currentPage: number, pageSize: number) => {
    if (typeof cellOptions.rule === 'function') {
      return cellOptions.rule(cellOptions.cellData, cellOptions.rowId, cellOptions.hoveredRowId);
    }
    if (cellOptions.rule === 'serial' && cellOptions.idx !== undefined) {
      return currentPage * pageSize + 1 + cellOptions.idx;
    }
    if (cellOptions.rule === 'checkbox' && cellOptions.cellData === undefined) {
      return <SelectionCheckbox { ...{
        type: 'checkbox',
        rowId: cellOptions.rowId,
        checked: cellOptions.checked,
      } } />
    }
    return cellOptions.cellData
  };

  shouldComponentUpdate(nextProps: CellProps) {
    return !(this.props.content === nextProps.content ||
      this.props.content.value === nextProps.content.value ||
      this.props.content.isFilter ||
      (
        typeof this.props.content === 'object' &&
        typeof nextProps === 'object' &&
        typeof this.props.content.value === 'object' &&
        typeof nextProps.content.value === 'object' &&
        this.props.content.value.idx === nextProps.content.value.idx &&
        this.props.content.value.cellData === nextProps.content.value.cellData &&
        this.props.content.value.hoveredRowId === nextProps.content.value.hoveredRowId
      ));
  }

  render(): React.Node {
    return <PageContext.Consumer>{
      ({ pageSize, currentPage }) => <ContentContext.Consumer>
        {
          ({ sort }) => {
            let content = this.props.content;
            let preparedContent;
            let column;
            if (content && typeof content === 'object' && content.value) {
              if (content.enableSorting) {
                preparedContent = <SortLink { ...content }/>;
              } else {
                if (typeof content.value === 'object') {
                  const cellOptions: cellOptions = content.value;
                  preparedContent = this._prepareContent(cellOptions, currentPage, pageSize)
                } else {
                  preparedContent = content.value;
                }
              }
              column = content.column;
            } else {
              preparedContent = content;
            }

            let className = column ? sort[column] : null;
            return <td className={(className && className.toLowerCase()) || 'no-sort'}>{preparedContent}</td>;
          }
        }
      </ContentContext.Consumer>
    }</PageContext.Consumer>;
  }
}
