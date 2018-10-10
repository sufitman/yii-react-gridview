/* @flow */
import * as React from 'react';
import Table from './table';
import Pager from './pager';
import type {
  GridViewProps,
  GridViewState,
  SortVariant,
  Sort,
  Filters, TableProps,
  PagerProps
} from './flow-typed/gridViewLibDef';

export default class GridView extends React.Component<GridViewProps, GridViewState> {
  id: string;
  defaultSelectionState: GridViewState = { selectedRowIds: [], allRowsChecked: false };
  constructor(props: GridViewProps): void {
    super(props);
    this.id = require('random-string')();
    this.state = this._setConditionalState({
      sort: {},
      filterData: {},
      ...this.defaultSelectionState
    }, false);
  }

  static defaultProps = {
    containerOptions: { className: 'grid-view' },
    tableOptions: {
      className: [
        'table',
        'table-striped',
        'table-bordered'
      ].join(' ')
    }, 
    pagerOptions: { className: 'pagination' },
    rowIdColumn: 'id',
  };

  _setConditionalState = (newState: GridViewState, setState: boolean = true): GridViewState => {
    let state: GridViewState = {};
    if (typeof this.props.selectedRowIds === 'undefined' && newState.selectedRowIds) {
      state.selectedRowIds = newState.selectedRowIds;
    }
    if (typeof this.props.allRowsChecked === 'undefined' && newState.allRowsChecked !== undefined) {
      state.allRowsChecked = newState.allRowsChecked;
    }
    if (typeof this.props.sort === 'undefined' && newState.sort) {
      state.sort = newState.sort;
    }
    if (typeof this.props.filterData === 'undefined' && newState.filterData) {
      state.filterData = newState.filterData;
    }
    if (setState && Object.keys(state).length) {
      this.setState(state);
    }
    return state;
  };

  _getPrevStateVar = (key: string, defaultVal: any = undefined) => {
    return ((this.props[key] !== undefined) ? this.props[key] : this.state[key]) || defaultVal;
  };

  _assignValue = (stateVar: string, col: string, val: mixed): {} => {
    const prevObj: {} = this._getPrevStateVar(stateVar);
    let newObj = { ...prevObj };
    if (val) {
      newObj[col] = val;
    } else {
      delete newObj[col];
    }
    this._setConditionalState({ ...this.defaultSelectionState, [stateVar]: newObj });
    return newObj
  };

  setSort = (column: string, sort: ?SortVariant): void => {
    if (this.props.onSortChange) {
      const newSort: Sort = this._assignValue('sort', column, sort);
      this.props.onSortChange(newSort);
    }
  };

  rowSelect = (rowId: mixed, checked: boolean): void  => {
    const prevSelectedRowIds: Array<mixed> = this._getPrevStateVar('selectedRowIds', []);
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
  };
  
  allRowsSelect = (checked: boolean): void  => {
    let selectedRowIds = [];
    if (checked) {
      this.props.data.forEach((row: {}, idx: number) => {
        selectedRowIds.push(row[this.props.rowIdColumn] || idx);
      });
    }
    this.props.onSelectionChange(selectedRowIds);
    this._setConditionalState({ selectedRowIds, allRowsChecked: checked });
  };

  pageButtonClick = (currentPage: number): void  => {
    this.props.onPageButtonClick(currentPage);
    this._setConditionalState(this.defaultSelectionState);
  };

  applyFilter = (column: string, value: mixed): void  => {
    const filterData: Filters = this._assignValue('filterData', column, value);
    this.props.onFilterChange(filterData);
  };

  render(): React.Node {
    const generalProps = {
      currentPage: this.props.currentPage,
      pageSize: this.props.pageSize,
      tableId: this.id,
    };

    let pagerSpecificProps: PagerProps = {
      pagerOptions: this.props.pagerOptions,
      totalCount: this.props.totalCount,
      maxButtonCount: this.props.maxButtonCount,
      pagerTag: this.props.pagerTag,
      pageTag: this.props.pageTag,
      activePageCssClass: this.props.activePageCssClass,
      disabledPageCssClass: this.props.disabledPageCssClass,
      nextPageCssClass: this.props.nextPageCssClass,
      prevPageCssClass: this.props.prevPageCssClass,
      firstPageCssClass: this.props.firstPageCssClass,
      lastPageCssClass: this.props.lastPageCssClass,
      nextPageLabel: this.props.nextPageLabel,
      prevPageLabel: this.props.prevPageLabel,
      firstPageLabel: this.props.firstPageLabel,
      lastPageLabel: this.props.lastPageLabel,
      onPageButtonClick: this.pageButtonClick,
    };
    let tableSpecificProps: TableProps = {
      sort: this._getPrevStateVar('sort'),
      setSort: this.setSort,
      rowSelect: this.rowSelect,
      allRowsSelect: this.allRowsSelect,
      allRowsChecked: this._getPrevStateVar('allRowsChecked'),
      selectedRowIds: this._getPrevStateVar('selectedRowIds'),
      applyFilter: this.applyFilter,
      data: this.props.data,
      headerCells: this.props.headerCells,
      footerCells: this.props.footerCells,
      caption: this.props.caption,
      captionOptions: this.props.captionOptions,
      containerOptions: this.props.containerOptions,
      tableOptions: this.props.tableOptions,
      showHeader: this.props.showHeader,
      showFooter: this.props.showFooter,
      placeFooterAfterBody: this.props.placeFooterAfterBody,
      headerRowOptions: this.props.headerRowOptions,
      footerRowOptions: this.props.footerRowOptions,
      rowOptions: this.props.rowOptions,
      columns: this.props.columns,
      filters: this.props.filters,
      notSetText: this.props.notSetText,
      emptyCaption: this.props.emptyCaption,
      rowIdColumn: this.props.rowIdColumn,
      filterData: this.props.filterData,
    };
    return <div { ...this.props.containerOptions }>
      <Table { ...generalProps } { ...tableSpecificProps } />
      <Pager { ...generalProps } { ...pagerSpecificProps } />
    </div>;
  }
}
