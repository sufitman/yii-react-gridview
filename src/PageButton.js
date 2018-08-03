import {Component} from 'react'

class PageButton extends Component {
  constructor(props) {
    super(props);
    this.settings = this.props.settings;
  }
  clickTag = (e) => {
    e.preventDefault();
    if (this.props.disabled) {
      return;
    }
    this.settings.onButtonClick(this.props.page);
  };
  render() {
    let Tag = this.settings.tag;
    let LinkTag = 'a'
    let options = {};
    options.className = this.props.className;

    if (typeof options.className === 'string') {
      options.className = options.className.split(' ');
    } else {
      options.className = [];
    }

    if (this.props.isNextPage) {
      options.className.push(this.settings.nextPageCssClass);
    }
    if (this.props.isPrevPage) {
      options.className.push(this.settings.prevPageCssClass);
    }
    if (this.props.isLastPage) {
      options.className.push(this.settings.lastPageCssClass);
    }
    if (this.props.isFirstPage) {
      options.className.push(this.settings.firstPageCssClass);
    }
    if (this.props.active) {
      options.className.push(this.settings.activePageCssClass);
    }
    if (this.props.disabled) {
      options.className.push(this.settings.disabledPageCssClass);
      LinkTag = 'span'
    }
    if (options.className.length) {
      options.className = options.className.join(' ');
    } else {
      delete options.className;
    }
    return <Tag>
      <LinkTag
        onClick={ this.clickTag }
        { ...options }>{ this.props.content }</LinkTag>
    </Tag>;
  }
}

export default PageButton;