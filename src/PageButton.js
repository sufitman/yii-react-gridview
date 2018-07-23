import {Component} from 'react'

class PageButton extends Component {
  constructor(props) {
    super(props);
    this.tag = this.props.tag;

    this.linkTag = 'a'
    this.options = {};
    this.options.className = this.props.className;

    if (typeof this.options.className === 'string') {
      this.options.className = this.options.className.split(' ');
    } else {
      this.options.className = [];
    }

    if (this.props.isNextPage) {
      this.options.className.push(this.props.nextPageCssClass);
    }
    if (this.props.isPrevPage) {
      this.options.className.push(this.props.prevPageCssClass);
    }
    if (this.props.isLastPage) {
      this.options.className.push(this.props.lastPageCssClass);
    }
    if (this.props.isFirstPage) {
      this.options.className.push(this.props.firstPageCssClass);
    }
    if (this.props.active) {
      this.options.className.push(this.props.activePageCssClass);
    }
    if (this.props.disabled) {
      this.options.className.push(this.props.disabledPageCssClass);
      this.linkTag = 'span'
    }
    this.options.className = this.options.className.join(' ');
    this.clickTag = this.clickTag.bind(this);
  }
  clickTag(e) {
    e.preventDefault();
    if (this.props.disabled) {
      return;
    }
    this.props.onButtonClick(this.props.page);
  }
  render() {
    let Tag = this.tag
    let LinkTag = this.linkTag
    return <Tag>
      <LinkTag
        onClick={ this.clickTag }
        { ...this.options }>{ this.props.content }</LinkTag>
    </Tag>;
  }
}

export default PageButton;