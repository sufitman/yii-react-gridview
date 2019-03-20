/* @flow */
import * as React from 'react';
import type { ButtonContextData, GeneralButtonOptions, PageButtonClick } from "../../GridView";
import { ButtonContext } from "../../contexts/ButtonContext";

type PagerButtonProps = {
  disabled: boolean,
  active: boolean,
  page: number,
  content: React.Node,
  onPageButtonClick: PageButtonClick,
} & GeneralButtonOptions;

export default class Button extends React.PureComponent<PagerButtonProps> {
  static defaultProps = {
    active: false,
    disabled: false,
  };
  clickTag = (e: SyntheticUIEvent<>) => {
    e.preventDefault();
    if (this.props.disabled) {
      return;
    }
    this.props.onPageButtonClick(this.props.page);
  };
  render(): React.Node {
    return <ButtonContext.Consumer>
      {
        (data: ButtonContextData) => {
          let Tag = data.pageTag;
          let LinkTag = 'a';
          const className = [];

          if (this.props.isNextPage) {
            className.push(data.nextPageCssClass);
          }
          if (this.props.isPrevPage) {
            className.push(data.prevPageCssClass);
          }
          if (this.props.isLastPage) {
            className.push(data.lastPageCssClass);
          }
          if (this.props.isFirstPage) {
            className.push(data.firstPageCssClass);
          }
          if (this.props.active) {
            className.push(data.activePageCssClass);
          }
          if (this.props.disabled) {
            className.push(data.disabledPageCssClass);
            LinkTag = 'span';
          }
          return <Tag>
            <LinkTag onClick={ this.clickTag } className={className.join(' ')}>
              { this.props.content }
            </LinkTag>
          </Tag>;
        }
      }
    </ButtonContext.Consumer>;
  }
}
