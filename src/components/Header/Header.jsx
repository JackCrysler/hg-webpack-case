import React from 'react';
import './header.css'

class Header extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return <header>
            <p>
                <span className="iconfont icon-xiangzuo"></span>
                <span>返回</span>
                <span>关闭</span>
            </p>
            <h3>{this.props.title}</h3>
            <span className="iconfont icon-gengduomore10"></span>
        </header>
    }
}
export default Header