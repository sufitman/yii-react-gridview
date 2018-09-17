import React, {Component} from 'react';
import Caption from './components/Caption';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class Table extends Component {
  static defaultProps = {
    data: [],
    headerCells: {},
    footerCells: [],
    captionOptions: {},
    tableOptions: {},
    showHeader: true,
    showFooter: false,
    headerRowOptions: {},
    footerRowOptions: {},
    rowOptions: {},
    filters: null,
    notSetText: '(not set)',
    emptyCaption: 'Nothing found',
    allRowsChecked: false
  }

  render() {
    let tableContent = [];
    let somethingFound = true;
    if (this.props.data.length) {
      tableContent.push(<Body
        data={ this.props.data }
        options={ this.props.rowOptions }
        rowIdColumn={ this.props.rowIdColumn }
        selectedRowIds={ this.props.selectedRowIds }
        rowSelect={ this.props.rowSelect }
        notSetText={ this.props.notSetText }
        currentPage={ this.props.currentPage }
        pageSize={ this.props.pageSize }
        tableId={ this.props.tableId }
        columns={ this.props.columns }
        key={ `tbody-${this.props.tableId}` }
      />);
    } else {
      somethingFound = false;
    }

    if (this.props.showHeader) {
      tableContent.unshift(<Header
        headerCells={ this.props.headerCells }
        allRowsChecked={ this.props.allRowsChecked }
        allRowsSelect={ this.props.allRowsSelect }
        options={ this.props.headerRowOptions }
        tableId={ this.props.tableId }
        columns={ this.props.columns }
        sort={ this.props.sort }
        filters={ this.props.filters }
        applyFilter={ this.props.applyFilter }
        key={ `thead-${this.props.tableId}` }
        setSort={ this.props.setSort }
      />);
    }
    if (this.props.caption || !somethingFound) {
      let captionProps = {
        options: this.props.captionOptions,
        key: `tcaption-${this.props.tableId}`,
        text: somethingFound ? this.props.caption : this.props.emptyCaption
      };
      tableContent[somethingFound ? 'unshift' : 'push'](<Caption { ...captionProps }/>);
    }
    if (this.props.showFooter) {
      let footer = <Footer
        footerCells={ this.props.footerCells }
        options={ this.props.footerRowOptions }
        columns={ this.props.columns }
        tableId={ this.props.tableId }
        key={ `tfoot-${this.props.tableId}` }
      />;
      this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
    }
    return (
      <table { ...this.props.tableOptions }>
        { tableContent }
      </table>
    );
  }
}

export default Table;