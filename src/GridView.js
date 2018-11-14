/* @flow */
import * as React from 'react';
import Table from './table';
import Pager from './pager';
import { PageContext } from './contexts/PageContext'
import { ApplyFilterContext } from './contexts/ApplyFilterContext'
import { SetSortContext } from './contexts/SetSortContext'
import { RowSelectContext } from './contexts/RowSelectContext'
import { AllRowsSelectContext } from './contexts/AllRowsSelectContext'
import { ContentContext } from './contexts/ContentContext'
import { ButtonContext } from './contexts/ButtonContext'

export type SortVariant = 'ASC' | 'DESC';

export type Sort = {[col: string]: SortVariant};

export type FilterObject = {type: string, options: FilterOptions };

export type FilterCell = string | FilterObject | ((name: string, onChange: (e: SyntheticInputEvent<*>) => any) => React.Node) | void;

export type Filters = {[col: string]: FilterCell};

export type FilterOptions = {type?: string, data?: {}};

export type Columns = {[col: string]: (null | ((cell: mixed, rowId: string) => any) | 'serial' | 'checkbox')};

export type FilterData = {[col: string]: mixed};

export type OnFilterChange = (filterData: FilterData) => mixed;

export type HeaderCells = {[column: string]: string | { value: string, column: string, enableSorting: boolean, sort: ?SortVariant}};

export type PageButtonClick = (pageNumber: number) => mixed;

export type GridViewProps = {
  data: Array<{[col: string | number]: mixed}>,
  headerCells: HeaderCells,
  footerCells: Array<mixed>,
  caption: string,
  captionOptions: {},
  containerOptions: {},
  tableOptions: {},
  showHeader: boolean,
  showFooter: boolean,
  placeFooterAfterBody: boolean,
  headerRowOptions: {},
  footerRowOptions: {},
  rowOptions: {},
  columns: Columns,
  filters: Filters,
  onSortChange: (newSort: Sort) => mixed,
  onFilterChange: OnFilterChange,
  notSetText: string,
  emptyCaption: string,
  rowIdColumn: string,
  onSelectionChange: (selectedRowIds: Array<mixed>) => mixed,
} & ButtonContextData & PagerProps & GeneralSettings;

export type TableProps = {
  data: Array<{[col: string | number]: mixed}>,
  headerCells: HeaderCells,
  footerCells: Array<mixed>,
  captionOptions: {},
  tableOptions: {},
  showHeader: boolean,
  showFooter: boolean,
  headerRowOptions: {},
  footerRowOptions: {},
  rowOptions: {},
  notSetText: string,
  emptyCaption: string,
  placeFooterAfterBody: boolean,
  rowIdColumn: string,
  caption: string,
};

export type GeneralSettings = {
  pageSize: number,
  currentPage: number,
}

export type PageSettings = {
  allRowsChecked: boolean,
  selectedRowIds: Array<mixed>,
  tableId?: string,
} & GeneralSettings;

export type ContentContextData = {
  filters: Filters,
  columns: Columns,
  sort: Sort,
}

export type ButtonContextData = {
  activePageCssClass: string,
  disabledPageCssClass: string,
  nextPageCssClass: string,
  prevPageCssClass: string,
  lastPageCssClass: string,
  firstPageCssClass: string,
  pageTag: string,
}

export type PagerProps = {
  maxButtonCount: number,
  pagerTag: string,
  nextPageLabel: string,
  prevPageLabel: string,
  firstPageLabel: string,
  lastPageLabel: string,
  totalCount: number,
  pagerOptions: {},
  onPageButtonClick: PageButtonClick
}

export type GeneralButtonOptions = {
  isFirstPage: boolean,
  isLastPage: boolean,
  isPrevPage: boolean,
  isNextPage: boolean,
}

export type GridViewState = {
  sort: {},
  filterData: {},
  pageSettings: PageSettings,
  contentContext: ContentContextData,
  buttonContext: ButtonContextData
};

const tableId = require('random-string')();

export default class GridView extends React.Component<GridViewProps, GridViewState> {
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
    activePageCssClass: 'active',
    disabledPageCssClass: 'disabled',
    nextPageCssClass: 'next',
    prevPageCssClass: 'prev',
    firstPageCssClass: 'first',
    lastPageCssClass: 'last',
    pageTag: 'li',
    pageSize: 20,
    currentPage: 0,
    columns: {},
  };

  state = {
    sort: {},
    filterData: {},
    pageSettings: {
      pageTag: this.props.pageTag,
      pageSize: this.props.pageSize,
      currentPage: this.props.currentPage,
      allRowsChecked: false,
      selectedRowIds: [],
      tableId,
    },
    contentContext: {
      columns: this.props.columns,
      filters: {},
      sort: {},
    },
    buttonContext: {
      pageTag: this.props.pageTag,
      activePageCssClass: this.props.activePageCssClass,
      disabledPageCssClass: this.props.disabledPageCssClass,
      nextPageCssClass: this.props.nextPageCssClass,
      prevPageCssClass: this.props.prevPageCssClass,
      firstPageCssClass: this.props.firstPageCssClass,
      lastPageCssClass: this.props.lastPageCssClass,
    }
  };

  static getDerivedStateFromProps(props: GridViewProps, state: GridViewState) {
    let newState = {};
    const pageSettings = state.pageSettings;
    const contentContext = state.contentContext;
    const buttonContext = state.buttonContext;
    if (
      props.currentPage !== pageSettings.currentPage ||
      props.pageSize !== pageSettings.pageSize
    ) {
      newState.pageSettings = {
        currentPage: props.currentPage,
        pageSize: props.pageSize,
        allRowsChecked: pageSettings.allRowsChecked,
        selectedRowIds: pageSettings.selectedRowIds,
        tableId,
      };
    }
    if (
      props.columns !== contentContext.columns ||
      props.filters !== contentContext.filters
    ) {
      newState.contentContext = {
        columns: props.columns,
        filters: props.filters,
        sort: contentContext.sort,
      };
    }
    if (
      props.pageTag !== buttonContext.pageTag ||
      props.activePageCssClass !== buttonContext.activePageCssClass ||
      props.disabledPageCssClass !== buttonContext.disabledPageCssClass ||
      props.nextPageCssClass !== buttonContext.nextPageCssClass ||
      props.prevPageCssClass !== buttonContext.prevPageCssClass ||
      props.firstPageCssClass !== buttonContext.firstPageCssClass ||
      props.lastPageCssClass !== buttonContext.lastPageCssClass
    ) {
      newState.buttonContext = {
        pageTag: props.pageTag,
        activePageCssClass: props.activePageCssClass,
        disabledPageCssClass: props.disabledPageCssClass,
        nextPageCssClass: props.nextPageCssClass,
        prevPageCssClass: props.prevPageCssClass,
        firstPageCssClass: props.firstPageCssClass,
        lastPageCssClass: props.lastPageCssClass,
      };
    }
    if (Object.keys(newState).length) {
      return newState;
    }
    return null;
  };

  _assignValue = (obj: {}, col: string, val: mixed): {} => {
    let newObj = { ...obj };
    if (val) {
      newObj[col] = val;
    } else {
      delete newObj[col];
    }
    return newObj
  };

  setSort = (column: ?string, sort: ?SortVariant): void => {
    if (column && this.props.onSortChange) {
      const newSort = this._assignValue(this.state.contentContext.sort, column, sort);
      this.setState({
        contentContext: {
          ...this.state.contentContext,
          sort: newSort
        }
      });
      this.props.onSortChange(newSort);
    }
  };

  rowSelect = (rowId: mixed, checked: boolean): void  => {
    const prevSelectedRowIds: Array<mixed> = this.state.pageSettings.selectedRowIds;
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
    this.setState({
      pageSettings: {
        ...this.state.pageSettings,
        selectedRowIds
      }
    });
  };
  
  allRowsSelect = (checked: boolean): void  => {
    let selectedRowIds = [];
    if (checked) {
      this.props.data.forEach((row: {}, idx: number) => {
        selectedRowIds.push(row[this.props.rowIdColumn] || idx);
      });
    }
    this.props.onSelectionChange(selectedRowIds);
    this.setState({
      pageSettings: {
        ...this.state.pageSettings,
        allRowsChecked: checked,
        selectedRowIds,
      }
    });
  };

  pageButtonClick = (pageNumber: number): void  => {
    this.props.onPageButtonClick(pageNumber);
    this.setState({
      pageSettings: {
        ...this.state.pageSettings,
        allRowsChecked: false,
      }
    });
  };

  applyFilter = (column: string, value: mixed): void  => {
    const filterData: FilterData = this._assignValue(this.state.filterData, column, value);
    this.setState({ filterData });
    this.props.onFilterChange(filterData);
  };

  render(): React.Node {
    let pagerSpecificProps: PagerProps = {
      pagerOptions: this.props.pagerOptions,
      totalCount: this.props.totalCount,
      maxButtonCount: this.props.maxButtonCount,
      pagerTag: this.props.pagerTag,
      nextPageLabel: this.props.nextPageLabel,
      prevPageLabel: this.props.prevPageLabel,
      firstPageLabel: this.props.firstPageLabel,
      lastPageLabel: this.props.lastPageLabel,
      onPageButtonClick: this.pageButtonClick,
    };

    let tableSpecificProps: TableProps = {
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
      notSetText: this.props.notSetText,
      emptyCaption: this.props.emptyCaption,
      rowIdColumn: this.props.rowIdColumn,
    };

    return <div { ...this.props.containerOptions }>
      <PageContext.Provider value={ this.state.pageSettings } >
        <ContentContext.Provider value={ this.state.contentContext }>
          <AllRowsSelectContext.Provider value={ this.allRowsSelect }>
            <RowSelectContext.Provider value={ this.rowSelect }>
              <SetSortContext.Provider value={ this.setSort }>
                <ApplyFilterContext.Provider value={ this.applyFilter }>
                  <Table { ...tableSpecificProps } />
                </ApplyFilterContext.Provider>
              </SetSortContext.Provider>
            </RowSelectContext.Provider>
          </AllRowsSelectContext.Provider>
        </ContentContext.Provider>
        <ButtonContext.Provider value={ this.state.buttonContext }>
          <Pager { ...pagerSpecificProps } />
        </ButtonContext.Provider>
      </PageContext.Provider>
    </div>;
  }
}
