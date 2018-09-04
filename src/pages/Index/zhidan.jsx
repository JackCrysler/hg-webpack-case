import React,{Component,createRef} from 'react'
import ActionSheet from './../../components/ActionSheet/ActionSheet.jsx'
import Dialog from './../../components/Dialog/Dialog.jsx'

import Fees from './fees.jsx'
import Way from './Way.jsx'
class ZhiDan extends Component{
    constructor(){
        super()
        this.state={
            feeslist:[],
            feename:'',
            feetypes:[],
            payways:[{}],
            show:false,
            menus:['大班','中班','小班'],
            dialogShow:false,
            grade:""
        }
        this.delZd = this.delZd.bind(this)
        this.addFees = this.addFees.bind(this)
        this.handleFeeList = this.handleFeeList.bind(this)
        this.getClassData = this.getClassData.bind(this)
        this.setClassData = this.setClassData.bind(this)
        this.updateMenus = this.updateMenus.bind(this)
        this.openActionSheet = this.openActionSheet.bind(this)
        this.editClass = this.editClass.bind(this)
    }
    setClassData(data){
        this.setState({
            grade:data
        })
    }
    getClassData(data){
        
        this.setState({
            grade:data
        })
        this.refs.setclass.value = data
    }
    openActionSheet(){
        this.setState({
            show:true
        },()=>{
            this.setState({
                show:false
            }) 
        })
    }
    updateMenus(data){
        this.setState({
            menus:data
        })
    }
    handleFeeList(id){
        
        let {feeslist} = this.state;
        
        let arr = feeslist.filter((item)=>{
            return item.key!=id
        })

        
        this.setState({
            feeslist:arr
        })
    }
    render(){
        return (
            <div className="content">
                <ActionSheet show={this.state.show} menus={this.state.menus} callback={this.getClassData} />
                <Dialog show={this.state.dialogShow} callback={this.setClassData} updateMenus={this.updateMenus} menus={this.state.menus}/>
                <div>
                    <div className="scheme">
                        <span>收费方案一</span>
                        {!this.props.first && <p onClick={this.delZd}></p>}
                    </div>
                    <div className="name">
                        <span>收费名称</span>
                        <input type="text" placeholder="请输入如“XX幼儿园2018年学费”" onChange={(e)=>{this.handleChange(e.target.value)}} value={this.state.feename} />
                    </div>
                    <div className="banner">
                        <hr/>
                    </div>
                    <div className="grade">
                        <div>
                            <span>收费年级</span>
                            <input onClick={this.openActionSheet} type="text" ref="setclass" placeholder="请输入该方案的收费年级" readOnly />
                            <p onClick={this.editClass}></p>
                        </div>
                    </div>
                    <div className="fees">
                        <ul>
                            <li>
                                <span>餐饮费</span>
                                <span>20000.00</span>
                                <b className="yuan">元</b>
                                <p className="add" onClick={this.addFees}>+</p>
                            </li> 
                            {this.state.feeslist}
                        </ul>
                    </div>
                    <Way ref="w"></Way>
                </div>
            </div>
        )
    }
    editClass(){
        this.setState({
            dialogShow:true
        },()=>{
            this.setState({
                dialogShow:false
            })   
        })
    }
    handleChange(value){
        
        this.setState({
            feename:value
        })
    }
    delZd(){
        console.log(this.refs.w)
    }
    addFees(){
        let id = new Date().getTime();
        let {feeslist} = this.state;
        this[`fee${feeslist.length}`] = createRef()
        this.setState({
            feeslist:[...this.state.feeslist,<Fees ref={this[`fee${feeslist.length}`]} callback={this.handleFeeList} key={id} id={id}></Fees>]
        })
    }
}


export default ZhiDan