import React, { Component } from 'react';

class ActionContent extends Component {
    constructor(){
        super()
        this.state={
            initClass:'action-sheet-content',
            flag:false
        }
        this.timer = null;
        this.beforeClose = this.beforeClose.bind(this)
        this.tsEnd = this.tsEnd.bind(this)
        this.afterSelect = this.afterSelect.bind(this)
    }
    render() {
        let {flag,initClass} = this.state;
        return (
            <div className="masker" onClick={this.beforeClose}>
                <div className={initClass} onTransitionEnd={this.tsEnd} onClick={e=>{e.stopPropagation()}}>
                    <ul className="action-sheet-list">
                        {
                            this.props.menus.map((item,index)=>{
                                return <li className="action-sheet-item" onClick={()=>{this.afterSelect(item)}} key={index}>{item}</li>
                            })
                        }            
                    </ul>
                    <button className="action-sheet-cancel" onClick={this.beforeClose}>取消</button>
                </div>
            </div>
        );
    }
    afterSelect(data){
        this.props.callback(data)
        this.beforeClose()
    }
    tsEnd(){
        if(this.state.flag){
            this.props.close()
        }
    }
    beforeClose(){
        this.setState({//setState是异步操作
            flag:true
        },()=>{
            this.setState({
                initClass:'action-sheet-content'
            })
        })
    }
    componentDidMount(){
        this.timer = setTimeout(()=>{
            this.setState({
                initClass:"action-sheet-content action-sheet-active"
            })
        },0)
    }
    componentWillUnmount(){
        clearTimeout(this.timer)
    }
}

export default ActionContent;