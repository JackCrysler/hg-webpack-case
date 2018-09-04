import React, { Component } from 'react';
import WayItem from './wayItem.jsx'
class Way extends Component {
    constructor(){
        super()
        this.state={
            ways:[
                {
                    name:"支付方式一",
                    data:{
                        installment:true,
                        info:'交1学期学费',
                        price: 20000,
                        isDiscount:true
                    }
                }],
            selectedWay:0
        }
        this.addNewWay=this.addNewWay.bind(this)
        this.selectWay=this.selectWay.bind(this)
        this.updateWayData=this.updateWayData.bind(this)
    }
    render() {
        let {selectedWay,ways} = this.state
        return (
            <div className="way">
                <div className="way-left">
                    <ul>
                        {
                            ways.map((item,index)=>{
                                return <li onClick={()=>{this.selectWay(index)}} className={index==selectedWay?"active":""} key={index}>{item.name}</li>
                            })
                        }
                    </ul>
                    <div className="bot" onClick={this.addNewWay}>
                        <p></p>
                    </div>
                </div>
                <div className="way-right">
                    {
                        ways.map((item,index)=>{
                            if(selectedWay==index){
                                return <WayItem name={item.name} key={index} data={item.data} updateWayData={this.updateWayData}></WayItem>
                            }
                        })
                    }
                </div>
                <div className="bottom"></div>
            </div>
        );
    }
    addNewWay(){
        let {ways} = this.state;
        if(ways.length==5) return; 
        let num = ['一','二','三','四','五'];
        
        this.setState({
            ways:[...ways,
                {
                    name:'支付方式'+num[ways.length],
                    data:{
                        installment:false,
                        info:'交2学期学费',
                        price: 40000,
                        isDiscount:false
                    }
                }
            ]
        })
    }
    selectWay(data){
        this.setState({
            selectedWay:data
        })
    }
    updateWayData(data,name,target){
        let {ways} = this.state;
        
        let arr = ways.map(item=>{
            if(item.name==name){
                item.data[target] = data;
            }
            return item
        })
        this.setState({
            ways:arr
        })
    }
}

export default Way;