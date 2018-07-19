import { Component } from 'react'
import TableCaption from './TableCaption';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import TableFooter from './TableFooter';
import Pager from './Pager';

class GridView extends Component {
    constructor(props) {
        super(props)
        this.id = require('random-string')();
        this.showHeader = this.props.showHeader || true;
        this.showFooter = this.props.showFooter || false;
        this.placeFooterAfterBody = this.props.placeFooterAfterBody || false;
        this.options = this.props.options || { className: 'grid-view' };
        this.captionOptions = this.props.captionOptions || {};
        this.headerRowOptions = this.props.headerRowOptions || {};
        this.footerRowOptions = this.props.footerRowOptions || {};
        this.rowOptions = this.props.rowOptions || {};
        this.tableOptions = this.props.tableOptions || { className: [
            'table',
            'table-striped',
            'table-bordered'
        ].join(' ') };
    }
    render() {
        let tableContent = [<TableBody data={ this.props.data } options={this.rowOptions } tableId={ this.id }/>];
        if (this.showHeader) {
            tableContent.unshift(<TableHeader
                headerCells={ this.props.headerCells }
                options={ this.headerRowOptions }
                tableId={ this.id }
            />);
        }
        if (this.props.caption) {
            tableContent.unshift(<TableCaption text={ this.props.caption } options={ this.captionOptions } />);
        }
        if (this.showFooter) {
            let footer = <TableFooter footerCells={['d', 'e', 'f']} options={ this.footerRowOptions } tableId={ this.id }/>;
            this.placeFooterAfterBody ? tableContent.push(footer) : tableContent.unshift(footer);
        }
        return <div { ...this.options }>
            <table { ...this.tableOptions }>
                { tableContent }
            </table> 
            <Pager />
        </div>;
    }
}

export default GridView;