/* @flow */
import * as React from 'react';
import type { PagerButtonProps } from "../../flow-typed/gridViewLibDef";

export default class Button extends React.PureComponent<PagerButtonProps> {
  static defaultProps = {
    pageTag: 'li',
    activePageCssClass: 'active',
    disabledPageCssClass: 'disabled',
    nextPageCssClass: 'next',
    prevPageCssClass: 'prev',
    firstPageCssClass: 'first',
    lastPageCssClass: 'last',
    onPageButtonClick: null,
  };
  clickTag = (e: SyntheticUIEvent<>) => {
    e.preventDefault();
    if (this.props.disabled) {
      return;
    }
    this.props.onPageButtonClick(this.props.page);
  };
  render(): React.Node {
    let Tag = this.props.pageTag;
    let LinkTag = 'a';
    let options = {};
    options.className = this.props.className;

    if (typeof options.className === 'string') {
      options.className = options.className.split(' ');
    } else {
      options.className = [];
    }

    if (this.props.isNextPage) {
      options.className.push(this.props.nextPageCssClass);
    }
    if (this.props.isPrevPage) {
      options.className.push(this.props.prevPageCssClass);
    }
    if (this.props.isLastPage) {
      options.className.push(this.props.lastPageCssClass);
    }
    if (this.props.isFirstPage) {
      options.className.push(this.props.firstPageCssClass);
    }
    if (this.props.active) {
      options.className.push(this.props.activePageCssClass);
    }
    if (this.props.disabled) {
      options.className.push(this.props.disabledPageCssClass);
      LinkTag = 'span';
    }
    if (options.className.length) {
      options.className = options.className.join(' ');
    } else {
      delete options.className;
    }
    return <Tag>
      <LinkTag onClick={ this.clickTag } { ...options }>
        { this.props.content }
      </LinkTag>
    </Tag>;
  }
}
