/* @flow */
import * as React from 'react';
import type { Sort, SortVariant } from "../../../../GridView";
import { SetSortContext } from "../../../../contexts/SetSortContext";
import { ContentContext } from "../../../../contexts/ContentContext";

type SetSort = (column: ?string, sort: ?SortVariant) => void;
type SortLinkProps = {|
  column: string,
  value: string,
  enableSorting?: boolean
|}

export default class SortLink extends React.PureComponent<SortLinkProps> {
  setSort = (setSort: SetSort, sort: Sort, e: SyntheticInputEvent<>) => {
    e.preventDefault();
    let newSort;
    const column = e.target.getAttribute('data-column');
    if (!column) {
      throw new Error('Invalid column');
    }
    const oldSort = sort[column];
    if (!oldSort) {
      newSort = 'ASC';
    } else if (oldSort === 'ASC') {
      newSort = 'DESC';
    } else {
      newSort = null;
    }
    setSort(column, newSort);
    return newSort;
  };
  render(): React.Node {
    return <SetSortContext.Consumer>
      {
        (setSort) => <ContentContext.Consumer>
          {
            ({ sort }) => {
              let className = sort[this.props.column];
              return <a
                className={ (className && className.toLowerCase()) || 'no-sort' }
                onClick={ this.setSort.bind(this, setSort, sort) }
                data-column={ this.props.column }
              >{ this.props.value }</a>
            }
          }
        </ContentContext.Consumer>
      }
    </SetSortContext.Consumer>;
  }
}
