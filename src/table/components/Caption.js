import React, {Component} from 'react';

class Caption extends Component {
  render() {
    return <caption {...this.props.options} >{this.props.text}</caption>;
  }
}

export default Caption;