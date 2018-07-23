import {Component} from 'react'
import PageButton from './PageButton';

class Pager extends Component {
  constructor(props) {
    super(props);
    this.buttons = [];
    this.generalOptions = {
      onButtonClick: this.props.onButtonClick,
      activePageCssClass: this.props.activePageCssClass,
      disabledPageCssClass: this.props.disabledPageCssClass,
      nextPageCssClass: this.props.nextPageCssClass,
      prevPageCssClass: this.props.prevPageCssClass,
      lastPageCssClass: this.props.lastPageCssClass,
      firstPageCssClass: this.props.firstPageCssClass,
      isFirstPage: false,
      isLastPage: false,
      isPrevPage: false,
      isNextPage: false,
      tag: this.props.pageTag
    }
    this.pageCount = Math.ceil(this.props.totalCount / this.props.pageSize);
  }
  _addPageButton(pageButtonOptions) {
    let options = Object.assign({}, this.generalOptions, pageButtonOptions);
    options.key = `pg-${this.props.tableId}-${pageButtonOptions.idx}`;
    this.buttons.push(<PageButton { ...options } />);
  }
  _addFirstPageButton() {
    let page = 0;
    let isActive = this.props.currentPage === page;
    this._addPageButton({
      page: page,
      content: this.props.firstPageLabel,
      active: isActive,
      disabled: isActive,
      isFirstPage: true,
      idx: 'f'
    });
  }
  _addLastPageButton() {
    this._addPageButton({
      page: this.pageCount - 1,
      content: this.props.lastPageLabel || this.pageCount,
      active: false,
      disabled: this.props.currentPage >= this.pageCount - 1,
      isLastPage: true,
      idx: 'l'
    });
  }
  _addPrevPageButton() {
    let page;
    if ((page = this.props.currentPage - 1) < 0) {
      page = 0;
    }
    this._addPageButton({
      page: page,
      content: this.props.prevPageLabel,
      active: false,
      disabled: this.props.currentPage <= 0,
      isPrevPage: true,
      idx: 'p'
    });
  }
  _addNextPageButton() {
    let page;
    let penultimate = this.pageCount - 1
    if ((page = this.props.currentPage + 1) >= penultimate) {
      page = penultimate;
    }
    this._addPageButton({
      page: page,
      content: this.props.nextPageLabel,
      active: false,
      disabled: this.props.currentPage >= penultimate,
      isNextPage: true,
      idx: 'n'
    });
  }
  _addPages() {
    let beginPage = Math.max(0, this.props.currentPage - Math.round(this.props.maxButtonCount / 2));
    let endPage = beginPage + this.props.maxButtonCount - 1
    if (endPage >= this.pageCount) {
      endPage = this.pageCount - 1;
      beginPage = Math.max(0, endPage - this.props.maxButtonCount + 1);
    }

    for (let i = beginPage; i <= endPage; ++i) {
      let isActive = this.props.currentPage === i;
      this._addPageButton({
        page: i,
        content: i + 1,
        active: isActive,
        disabled: isActive,
        idx: i,
      })
    }
  }
  render() {
    let Tag = this.props.pagerTag;
    if (this.props.firstPageLabel) {
      this._addFirstPageButton();
    }
    if (this.props.prevPageLabel) {
      this._addPrevPageButton();
    }
    this._addPages();
    if (this.props.nextPageLabel) {
      this._addNextPageButton();
    }
    if (this.props.lastPageLabel) {
      this._addLastPageButton();
    }
    return <Tag { ...this.props.options }>
      { this.buttons }
    </Tag>;
  }
}

export default Pager;