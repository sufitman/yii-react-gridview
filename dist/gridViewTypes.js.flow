export type SortVariant = 'ASC' | 'DESC';

export type Sort = {[col: string]: SortVariant};

export type Filters = {[col: string]: mixed};

export type FilterOptions = {type: string, data?: {}};

export type Columns = {[col: string]: null | (cell: mixed, rowId: string) => mixed | 'serial' | 'checkbox'};

export type RowSelect = (rowId: mixed, checked: boolean) => void;

export type OnFilterChange = (filterData: {[col: string]: mixed}) => mixed;

export type SetSort = (column: string, sort: ?SortVariant) => void;

export type HeaderCells = {[column: string]: string | { value: string, column: string, enableSorting: boolean, sort: ?SortVariant}};

export type AllRowsSelect = (checked: boolean) => void;

export type ApplyFilter = (column: string, value: mixed) => void;

export type RowOptions = {row: {}, idx: string, rowId: string, checked: boolean, isTh: boolean};

export type PageButtonClick = (currentPage: number) => mixed;

export type ButtonSettings = {
  activePageCssClass: string,
  disabledPageCssClass: string,
  nextPageCssClass: string,
  prevPageCssClass: string,
  lastPageCssClass: string,
  firstPageCssClass: string,
  pageTag: string,
  onPageButtonClick: PageButtonClick,
}

export type GridViewProps = {
  data: Array<{[col: string]: mixed}>,
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
  columns?: Columns,
  filters: Filters,
  onSortChange: (newSort: Sort) => mixed,
  onFilterChange: OnFilterChange,
  notSetText: string,
  emptyCaption: string,
  rowIdColumn: string,
  onSelectionChange: (selectedRowIds: Array<mixed>) => mixed,
  selectedRowIds: Array<mixed>,
  allRowsChecked: boolean,
  sort?: Sort,
  filterData: {},
} & ButtonSettings & PagerSettings & PageSettings;


export type TableProps = {
  data: Array<{}>,
  headerCells: HeaderCells,
  footerCells: Array<mixed>,
  captionOptions: {},
  tableOptions: {},
  showHeader: boolean,
  showFooter: boolean,
  headerRowOptions: {},
  footerRowOptions: {},
  rowOptions: {},
  filters: Filters,
  notSetText: string,
  emptyCaption: string,
  allRowsChecked: boolean,
  placeFooterAfterBody: boolean,

  rowIdColumn: string,
  selectedRowIds: mixed[],
  rowSelect: RowSelect,
  allRowsSelect: AllRowsSelect,
  tableId: string,
  columns: Columns,
  sort: Sort,
  applyFilter: ApplyFilter,
  setSort: SetSort,
  caption: string,
} & PageSettings;

export type BodyProps = {
  tableId: string,
  data: Array<{}>,
  options: {},
  rowIdColumn: string,
  selectedRowIds: Array<mixed>,
  columns: Columns,
  rowSelect: RowSelect,
}

export type CaptionProps = {
  text: string,
  options: {},
}

export type FooterProps = {
  tableId: string,
  footerCells: Array<mixed>,
  columns: Columns,
}

export type HeaderProps = {
  tableId: string,
  headerCells: HeaderCells,
  options: {},
  columns: Columns,
  setSort: SetSort,
  allRowsChecked: boolean,
  allRowsSelect: AllRowsSelect,
  sort: Sort,
  filters?: Filters,
  applyFilter?: ApplyFilter,
}

export type FilterProps = {
  id: string,
  tableId: string,
  columns: Columns,
  filters: Filters,
  applyFilter: ApplyFilter,
}

export type RowProps = {
  id: string,
  columns: Columns,
  sort: Sort,
  notSetText: string,
  setSort: SetSort,
  options: {},
  data: {},
  rowSelect: RowSelect,
  allRowsSelect: AllRowsSelect,
} & PageSettings;

export type SortLinkProps = {
  column: string,
  value: string,
  sort: string,
  setSort: SetSort
}

export type SelectionChange = (checked: boolean) => void

export type SelectionCheckboxProps = {
  type: string,
  checked: boolean,
  selectionChange: SelectionChange,
}

export type CellProps = {
  content: mixed,
  setSort: SetSort,
  rowSelect: RowSelect,
  allRowsSelect: AllRowsSelect,
} & PageSettings;

export type CellOptions = { rule: CellRule, cellData: string | SortLinkProps | SelectionCheckboxProps, rowId?: string, idx: number, checked?: boolean }

export type CellRule = (cell: mixed, rowId?: string) => string | SortLinkProps | SelectionCheckboxProps | 'serial' | 'checkbox';

type PageSettings = {
  pageSize: number,
  currentPage: number,
}

export type PagerProps = { tableId: string } & ButtonSettings & PagerSettings & PageSettings;

type PagerSettings = {
  maxButtonCount: number,
  pagerTag: string,
  nextPageLabel: string,
  prevPageLabel: string,
  firstPageLabel: string,
  lastPageLabel: string,
  totalCount: number,
  pagerOptions: {},
}

export type GeneralButtonOptions = {
  isFirstPage: boolean,
  isLastPage: boolean,
  isPrevPage: boolean,
  isNextPage: boolean,
}

export type PagerButtonProps = {
  disabled: boolean,
  active: boolean,
  page: number,
  className: string,
  content: string,
} & GeneralButtonOptions & ButtonSettings;

export type GridViewState = {
  selectedRowIds?: mixed[],
  allRowsChecked?: boolean,
  sort?: {},
  filterData?: {}
};
