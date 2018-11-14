/* @flow */
import * as React from 'react';

type CaptionProps = {
  text: string,
  options: {},
}

export default class Caption extends React.Component<CaptionProps> {
  render(): React.Node {
    return <caption {...this.props.options} >{this.props.text}</caption>;
  }
}
