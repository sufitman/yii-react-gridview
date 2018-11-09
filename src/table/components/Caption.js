/* @flow */
import * as React from 'react';
import { CaptionProps } from '../../gridViewTypes';

export default class Caption extends React.Component<CaptionProps> {
  render(): React.Node {
    return <caption {...this.props.options} >{this.props.text}</caption>;
  }
}
