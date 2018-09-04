import React, { Component } from 'react';

class ActionContent extends Component {
    constructor(){
        super()
        this.state={
            isAddNew:false,
            menus:['大班','中班','小班']
        }
        this.addNewClass=this.addNewClass.bind(this)
        this.saveNewClass=this.saveNewClass.bind(this)
        this.saveMenus=this.saveMenus.bind(this)
    }
    render() {
        let {isAddNew} = this.state
        return (
            <div className="masker">
                <div className="dialog-content">
                    <p className="dialog-title">年级名称</p>
                    <ul className="dialog-list">
                        {
                            this.state.menus.map((item,index)=>{
                                return <li className="dialog-item" key={index}><span className="item-msg">{item}</span> <span className="delete-item">X</span></li>
                            })
                        }
                    </ul>
                    {isAddNew && <div><input type="text" ref="c" /><span className="save-item" onClick={this.saveNewClass}>√</span></div>}
                    <p  className="dialog-add" onClick={this.addNewClass}>添加年纪</p>
                    <hr/>
                    <div  className="dialog-btns">
                        <button className="dialog-cancel" onClick={this.props.close}>取消</button>
                        <button className="dialog-save" onClick={this.saveMenus}>保存</button>
                    </div>
                </div>
            </div>
        );
    }
    saveMenus(){
        this.props.updateMenus(this.state.menus)
        this.props.close()
    }
    addNewClass(){
        this.setState({
            isAddNew:true
        })
    }
    saveNewClass(){
        if(this.refs.c.value!=''){
            this.setState({
                menus:[...this.state.menus,this.refs.c.value]
            })
        }
        this.setState({
            isAddNew:false
        })
    }
    componentDidMount(){
    
    }
    
    componentWillUnmount(){
    
    }
}

export default ActionContent;