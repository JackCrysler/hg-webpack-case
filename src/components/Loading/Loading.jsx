import React, { Component } from 'react';
import loadingImg from './spinning-circles.svg'
import './index.css'
class Loading extends Component {
    render() {
        return (
            <div className="masker">
                <img src={loadingImg} alt=""/>
            </div>
        );
    }
}

export default Loading;