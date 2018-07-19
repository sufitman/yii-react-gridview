import { Component } from 'react'

class TableCaption extends Component {
    render() {
        return <caption { ...this.props.options } >{ this.props.text }</caption>;
    }
}

export default TableCaption;