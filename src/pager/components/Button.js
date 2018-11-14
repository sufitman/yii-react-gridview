/* @flow */
import * as React from 'react';
import type { ButtonContextData, GeneralButtonOptions, PageButtonClick } from "../../GridView";
import { ButtonContext } from "../../contexts/ButtonContext";

type PagerButtonProps = {
  disabled: boolean,
  active: boolean,
  page: number,
  className: string | Array<string>,
  content: React.Node,
  onPageButtonClick: PageButtonClick,
} & GeneralButtonOptions;

export default class Button extends React.PureComponent<PagerButtonProps> {
  static defaultProps = {
    className: [],
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
          let options = {};
          options.className = this.props.className;

          if (typeof options.className === 'string') {
            options.className = options.className.split(' ');
          }

          if (this.props.isNextPage) {
            options.className.push(data.nextPageCssClass);
          }
          if (this.props.isPrevPage) {
            options.className.push(data.prevPageCssClass);
          }
          if (this.props.isLastPage) {
            options.className.push(data.lastPageCssClass);
          }
          if (this.props.isFirstPage) {
            options.className.push(data.firstPageCssClass);
          }
          if (this.props.active) {
            options.className.push(data.activePageCssClass);
          }
          if (this.props.disabled) {
            options.className.push(data.disabledPageCssClass);
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
    </ButtonContext.Consumer>;
  }
}
