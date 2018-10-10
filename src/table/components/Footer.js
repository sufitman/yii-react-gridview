/* @flow */
import * as React from 'react';
import Row from './Row';
import type { FooterProps } from "../../flow-typed/gridViewLibDef";

export default class Footer extends React.Component<FooterProps> {
  id: string;
  constructor(props: FooterProps) {
    super(props);
    this.id = `tf-${this.props.tableId}`;
  }

  render(): React.Node {
    let row = {};
    Object.keys(this.props.columns).forEach((column, idx) => {
      row[column] = this.props.footerCells[idx];
    });
    return <tfoot>
      <Row
        data={ { row } }
        key={ this.id }
        id={ this.id }
        columns={ this.props.columns }
      />
    </tfoot>;
  }
}
