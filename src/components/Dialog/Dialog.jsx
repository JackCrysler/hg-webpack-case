import React, { Component } from 'react';
import './index.css'
import DialogContent from './DialogContent.jsx'
class ActionSheet extends Component {
    constructor(){
        super()
        this.state={
            open:false,
            initClass:'action-sheet-content'
        }
        this.open= this.open.bind(this)
        this.close= this.close.bind(this)
    }
    render() {
        return (
            this.state.open && <DialogContent updateMenus={this.props.updateMenus} close={this.close} menus={this.props.menus} callback={this.props.callback} />
        )
    }
    componentWillReceiveProps(nextProps,nextState,nextContext){
        if(nextProps.show){
            this.open()
        }
    }
    open(){
        this.setState({
            open:true
        })
    }
    close(){
        this.setState({
            open:false
        })
    }
}

export default ActionSheet;