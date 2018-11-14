/* @flow */
import * as React from 'react';
import Row from './Row';
import { PageContext } from "../../contexts/PageContext";
import { ContentContext } from "../../contexts/ContentContext";

type FooterProps = { footerCells: Array<mixed> }

export default class Footer extends React.Component<FooterProps> {
  render(): React.Node {
    return <ContentContext.Consumer>
      {
        ({ columns }) => <PageContext.Consumer>
          {
            ({tableId}) => {
              let row = {};
              Object.keys(columns).forEach((column, idx) => {
                row[column] = this.props.footerCells[idx];
              });
              const id = `tf-${tableId}`;
              return <tfoot>
                <Row
                  data={{row}}
                  key={id}
                  id={id}
                />
              </tfoot>;
            }
          }
        </PageContext.Consumer>
      }
    </ContentContext.Consumer>;
  }
}
