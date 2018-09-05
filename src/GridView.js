import React, {Component} from 'react';
import Table from './table';
import Pager from './pager';
import PropTypes from 'prop-types';

class GridView extends Component {
  constructor(props) {
    super(props);
    this.id = require('random-string')();
    this.defaultSelectionState = { selectedRowIds: [], allRowsChecked: false };
    this.state = this._setConditionalState({
      sort: {},
      filterData: {},
      ...this.defaultSelectionState
    }, false);
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
    selectedRowIds: PropTypes.array,
    allRowsChecked: PropTypes.bool,
    sort: PropTypes.object,
    filterData: PropTypes.object,
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
    pagerOptions: { className: 'pagination' },
    rowIdColumn: 'id',
  }

  _setConditionalState = (newState, setState = true) => {
    let state = {};
    if (this.props.selectedRowIds === undefined && newState.selectedRowIds) {
      state.selectedRowIds = newState.selectedRowIds;
    }
    if (this.props.allRowsChecked === undefined && newState.allRowsChecked !== undefined) {
      state.allRowsChecked = newState.allRowsChecked;
    }
    if (this.props.sort === undefined && newState.sort) {
      state.sort = newState.sort;
    }
    if (this.props.filterData === undefined && newState.filterData) {
      state.filterData = newState.filterData;
    }
    if (setState && Object.keys(state).length) {
      this.setState(state);
    }
    return state;
  }

  _getPrevStateVar = (key) => {
    let prevStateVar;
    if (this.props[key] !== undefined) {
        prevStateVar = this.props[key];
    } else {
        prevStateVar = this.state[key];
    }
    return prevStateVar;
  }

  setSort = (column, sort) => {
    if (this.props.onSortChange) {
      let prevSort = this._getPrevStateVar('sort');
      if (typeof prevSort !== 'object') {
        throw new Error(`sort must be an object, ${typeof prevSort} provided`);
      }
      let newSort = { ...prevSort };
      if (sort) {
        newSort[column] = sort;
      } else {
        delete newSort[column];
      }
      this.props.onSortChange(newSort);
      this._setConditionalState({
        ...this.defaultSelectionState,
        sort: newSort
      });
    }
  }

  rowSelect = (rowId, checked) => {
    let prevSelectedRowIds = this._getPrevStateVar('selectedRowIds');
    if (!Array.isArray(prevSelectedRowIds)) {
        throw new Error(`selectedRowIds must be an array, ${typeof prevSelectedRowIds} provided`);
    }
    let selectedRowIds = [ ...prevSelectedRowIds ];
    if (checked) {
      selectedRowIds.push(rowId)
    } else {
      let idx = selectedRowIds.indexOf(rowId);
      if (idx !== -1) {
        selectedRowIds.splice(idx, 1);
      }
    }
    this.props.onSelectionChange(selectedRowIds);
    this._setConditionalState({ selectedRowIds });
  }
  
  allRowsSelect = (checked) => {
    let selectedRowIds = [];
    if (checked) {
      this.props.data.forEach((row, idx) => {
        selectedRowIds.push(row[this.props.rowIdColumn] || idx);
      });
    }
    this.props.onSelectionChange(selectedRowIds);
    this._setConditionalState({ selectedRowIds, allRowsChecked: checked });
  }

  pageButtonClick = (currentPage) => {
    this.props.onPageButtonClick(currentPage);
    this._setConditionalState(this.defaultSelectionState);
  }

  applyFilter = (column, value) => {
    let prevFilterData = this._getPrevStateVar('filterData');
    if (typeof prevFilterData !== 'object') {
      throw new Error(`filterData must be an object, ${typeof prevFilterData} provided`);
    }
    let filterData = { ...prevFilterData };
    if (value) {
      filterData[column] = value;
    } else {
      delete filterData[column];
    }
    this.props.onFilterChange(filterData);
    this._setConditionalState({ ...this.defaultSelectionState, filterData});
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
    tableSpecificProps.sort = this._getPrevStateVar('sort');
    tableSpecificProps.setSort = this.setSort;
    tableSpecificProps.rowSelect = this.rowSelect;
    tableSpecificProps.allRowsSelect = this.allRowsSelect;
    tableSpecificProps.allRowsChecked = this._getPrevStateVar('allRowsChecked');
    tableSpecificProps.selectedRowIds = this._getPrevStateVar('selectedRowIds');
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