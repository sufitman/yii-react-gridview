import React, {Component} from 'react';
import Table from './table';
import Pager from './pager';
import PropTypes from 'prop-types';

class GridView extends Component {
  constructor(props) {
    super(props);
    this.id = require('random-string')();
    //@TODO make state be available through the props
    this.defaultSelectionState = { selection: [], allRowsChecked: false };
    this.state = { sort: {}, filterData: {}, ...this.defaultSelectionState };
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
    rowIdColumn: PropTypes.string,
    onSelectionChange: PropTypes.func,
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
    rowIdColumn: 'id',
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
          ...this.defaultSelectionState,
          sort: newSort
      }, () => this.props.onSortChange(this.state.sort));
    }
  }

  rowSelect = (id, checked) => {
    this.setState(prevState => {
      let selection = [ ...prevState.selection ];
      if (checked) {
        selection.push(id)
      } else {
        let idx = selection.indexOf(id);
        if (idx !== -1) {
          selection.splice(idx, 1);
        }
      }
      return { selection };
    }, () => this.props.onSelectionChange(this.state.selection));
  }
  
  allRowsSelect = (checked) => {
    this.setState(prevState => {
      let selection = [];
      if (checked) {
        this.props.data.forEach((item) => {
          selection.push(item[this.props.rowIdColumn]);
        });
      }
      return { selection, allRowsChecked: checked };
    }, () => {
      this.props.onSelectionChange(this.state.selection)
    });
  }

  pageButtonClick = (currentPage) => {
    this.setState(this.defaultSelectionState, () => this.props.onPageButtonClick(currentPage));
  }

  applyFilter = (column, value) => {
    let filterData = { ...this.state.filterData };
    if (value) {
      filterData[column] = value;
    } else {
      delete filterData[column];
    }
    this.setState({ ...this.defaultSelectionState, filterData});
    this.props.onFilterChange(filterData);
  }

  render() {
    const generalProps = {
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
      tableId: this.id,
    };
    let pagerSpecificProps = {};
    let tableSpecificProps = {};
    ({
      pagerOptions: pagerSpecificProps.pagerOptions,
      totalCount: pagerSpecificProps.totalCount,
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
      ...tableSpecificProps
    } = this.props);
    tableSpecificProps.sort = this.state.sort;
    tableSpecificProps.setSort = this.setSort;
    tableSpecificProps.rowSelect = this.rowSelect;
    tableSpecificProps.allRowsSelect = this.allRowsSelect;
    tableSpecificProps.allRowsChecked = this.state.allRowsChecked;
    tableSpecificProps.selection = this.state.selection;
    delete tableSpecificProps.onPageButtonClick;
    pagerSpecificProps.onPageButtonClick = this.pageButtonClick;
    delete tableSpecificProps.onFilterChange;
    tableSpecificProps.applyFilter = this.applyFilter;

    return <div { ...this.props.containerOptions }>
      <Table { ...generalProps } { ...tableSpecificProps } />
      <Pager { ...generalProps } { ...pagerSpecificProps } />
    </div>;
  }
}

export default GridView;