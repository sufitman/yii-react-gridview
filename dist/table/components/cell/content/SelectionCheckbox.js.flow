/* @flow */
import * as React from 'react';
import { RowSelectContext } from "../../../../contexts/RowSelectContext";
import { AllRowsSelectContext } from "../../../../contexts/AllRowsSelectContext";

type SelectionCheckboxProps = {|
  type: string,
  checked?: boolean,
  rowId: string,
|}
type SelectionChange = (checked: boolean) => void
type AllRowsSelect = (checked: boolean) => void;
type RowSelect = (rowId: mixed, checked: boolean) => void;

export default class SelectionCheckbox extends React.PureComponent<SelectionCheckboxProps> {
  static defaultProps = { checked: false };
  selectRow = (callback: SelectionChange, e: SyntheticInputEvent<HTMLInputElement>) => {
    callback(e.currentTarget.checked)
  };

  _getSelectionChange = (rowId: string, rowSelect: RowSelect, allRowsSelect: AllRowsSelect) => (checked: boolean) => {
    if (rowId !== undefined) {
      rowSelect(rowId, checked);
    } else {
      allRowsSelect(checked);
    }
  };
  render(): React.Node {
    return <AllRowsSelectContext.Consumer>
      {
        (allRowsSelect) => <RowSelectContext.Consumer>
          {
            (rowSelect) => <input
              type={ this.props.type }
              checked={ this.props.checked }
              onChange={ this.selectRow.bind(this, this._getSelectionChange(this.props.rowId, rowSelect, allRowsSelect)) }
            />
          }
        </RowSelectContext.Consumer>
      }
    </AllRowsSelectContext.Consumer>;
  }
}
