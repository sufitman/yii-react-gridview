/* @flow */
import * as React from 'react';
import Caption from './components/Caption';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import type { TableProps } from "../GridView";
import { PageContext } from "../contexts/PageContext";

export default class Table extends React.Component<TableProps> {
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
    notSetText: '(not set)',
    emptyCaption: 'Nothing found',
    placeFooterAfterBody: true
  };

  render(): React.Node {
    return <PageContext.Consumer>{
      ({ tableId }) => {
        let tableContent: Array<React.Element<any>> = [];
        let somethingFound = true;
        if (this.props.data.length) {
          tableContent.push(<Body
            data={ this.props.data }
            options={ this.props.rowOptions }
            rowIdColumn={ this.props.rowIdColumn }
            notSetText={ this.props.notSetText }
            key={ `tbody-${tableId}` }
          />);
        } else {
          somethingFound = false;
        }

        if (this.props.showHeader) {
          tableContent.unshift(<Header
            headerCells={ this.props.headerCells }
            options={ this.props.headerRowOptions }
            key={ `thead-${tableId}` }
          />);
        }
        if (this.props.caption || !somethingFound) {
          let captionProps = {
            options: this.props.captionOptions,
            key: `tcaption-${tableId}`,
            text: somethingFound ? this.props.caption : this.props.emptyCaption
          };
          const caption = <Caption { ...captionProps }/>;
          if (somethingFound) {
            tableContent.unshift(caption);
          } else {
            tableContent.push(caption);
          }
        }

        if (this.props.showFooter) {
          let footer = <Footer
            footerCells={ this.props.footerCells }
            options={ this.props.footerRowOptions }
            key={ `tfoot-${tableId}` }
          />;
          this.props.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
        }
        return (
          <table { ...this.props.tableOptions }>
            { tableContent }
          </table>
        );
      }
    }</PageContext.Consumer>
  }
}
