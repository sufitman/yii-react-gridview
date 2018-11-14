/* @flow */
import * as React from 'react';
import Row from './Row';
import Filter from './Filter';
import type { HeaderCells } from "../../GridView";
import { PageContext } from "../../contexts/PageContext";
import { ApplyFilterContext } from "../../contexts/ApplyFilterContext";
import { ContentContext } from "../../contexts/ContentContext";

type HeaderProps = {
  headerCells: HeaderCells,
  options: {},
}

export default class Header extends React.Component<HeaderProps> {
  render(): React.Node {
    return <PageContext.Consumer>
      {
        ({ tableId, allRowsChecked }) => <ContentContext.Consumer>
          {
            ({ filters }) => <ApplyFilterContext.Consumer>
              {
                (applyFilter) => {
                  const id = `th-${tableId}`;
                  let tableHeader = [<Row
                    data={ {
                      row: this.props.headerCells,
                      isTh: true,
                      checked: allRowsChecked,
                    } }
                    options={ this.props.options }
                    id={ id }
                    key={ id }
                  />];
                  if (filters) {
                    tableHeader.push(<Filter
                      key={ `${id}-filters` }
                      id={ id }
                      applyFilter={ applyFilter }
                    />);
                  }
                  return <thead>{ tableHeader }</thead>;
                }
              }
            </ApplyFilterContext.Consumer>
          }
        </ContentContext.Consumer>
      }
    </PageContext.Consumer>;
  }
}
