import React, {Component} from 'react';
import Table from './table';
import Pager from './pager';
import PropTypes from 'prop-types';

class GridView extends Component {
  constructor(props) {
    super(props);
    this.id = require('random-string')();
    this.state = { sort: {} };
  }
  
  static propTypes = {
    data: PropTypes.array,
    headerCells: PropTypes.object,
    footerCells: PropTypes.array,
    caption: PropTypes.string,
    captionOptions: PropTypes.object,
    containerOptions: PropTypes.object,
    tableOptions: PropTypes.object,
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
    headerRowOptions: PropTypes.object,
    footerRowOptions: PropTypes.object,
    rowOptions: PropTypes.object,
    columns: PropTypes.object,
    filters: PropTypes.object,
    onSortChange: PropTypes.func,
    onFilterChange: PropTypes.func,
    filterDelay: PropTypes.number,
    pagerOptions: PropTypes.object,
    currentPage: PropTypes.number,
    totalCount: PropTypes.number,
    maxButtonCount: PropTypes.number,
    pageSize: PropTypes.number,
    pagerTag: PropTypes.string,
    pageTag: PropTypes.string,
    activePageCssClass: PropTypes.string,
    disabledPageCssClass: PropTypes.string,
    nextPageCssClass: PropTypes.string,
    prevPageCssClass: PropTypes.string,
    firstPageCssClass: PropTypes.string,
    lastPageCssClass: PropTypes.string,
    nextPageLabel: PropTypes.string,
    prevPageLabel: PropTypes.string,
    firstPageLabel: PropTypes.string,
    lastPageLabel: PropTypes.string,
    onPageButtonClick: PropTypes.func,
    notSetText: PropTypes.string,
    emptyCaption: PropTypes.string,
  }

  static defaultProps = {
    containerOptions: {className: 'grid-view'},
    tableOptions: {
      className: [
        'table',
        'table-striped',
        'table-bordered'
      ].join(' ')
    },
  }

  setSort = (column, sort) => {
    if (this.props.onSortChange) {
      let newSort = { ...this.state.sort };
      if (sort) {
        newSort[column] = sort;
      } else {
        delete newSort[column];
      }
      this.setState({
          sort: newSort
      })
      this.props.onSortChange(this.state.sort);
    }
  }

  render() {
    const generalProps = {
      currentPage: this.props.currentPage,
      tableId: this.id,
    };
    let pagerSpecificProps = {};
    let tableSpecificProps = {};
    ({
      pagerOptions: pagerSpecificProps.pagerOptions,
      totalCount: pagerSpecificProps.totalCount,
      pageSize: pagerSpecificProps.pageSize,
      maxButtonCount: pagerSpecificProps.maxButtonCount,
      pagerTag: pagerSpecificProps.pagerTag,
      pageTag: pagerSpecificProps.pageTag,
      activePageCssClass: pagerSpecificProps.activePageCssClass,
      disabledPageCssClass: pagerSpecificProps.disabledPageCssClass,
      nextPageCssClass: pagerSpecificProps.nextPageCssClass,
      prevPageCssClass: pagerSpecificProps.prevPageCssClass,
      firstPageCssClass: pagerSpecificProps.firstPageCssClass,
      lastPageCssClass: pagerSpecificProps.lastPageCssClass,
      nextPageLabel: pagerSpecificProps.nextPageLabel,
      prevPageLabel: pagerSpecificProps.prevPageLabel,
      firstPageLabel: pagerSpecificProps.firstPageLabel,
      lastPageLabel: pagerSpecificProps.lastPageLabel,
      onPageButtonClick: pagerSpecificProps.onPageButtonClick,
      ...tableSpecificProps
    } = this.props);
    tableSpecificProps.sort = this.state.sort;
    tableSpecificProps.setSort = this.setSort;

    return <div { ...this.props.containerOptions }>
      <Table { ...generalProps } { ...tableSpecificProps } />
      <Pager { ...generalProps } { ...pagerSpecificProps } />
    </div>;
  }
}

export default GridView;