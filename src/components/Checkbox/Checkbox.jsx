import React from 'react';
import './checkbox.css';

class Checkbox extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <span className={this.props.flag ? "checkbox checked" : "checkbox"}></span>
    }
}

export default Checkbox