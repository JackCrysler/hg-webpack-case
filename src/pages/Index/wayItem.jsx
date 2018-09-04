import React, { Component, Fragment } from 'react';
import Checkbox from '../../components/checkbox/Checkbox.jsx'
import {withRouter} from 'react-router-dom'
class WayItem extends Component {
    constructor(){
        super()
        this.handleChange=this.handleChange.bind(this)
        this.gotoDiscount=this.gotoDiscount.bind(this)
    }
    render() {
        let {data} = this.props
        return (
            <Fragment>
                <div className="top">
                    <span>删除</span>
                </div>
                <ul>
                    <li>
                        <span>支付方式</span>
                        <div className="stages">
                            <p>
                                <Checkbox flag={data.installment}></Checkbox>
                                <span>分期</span>
                            </p>
                            <p>
                                <Checkbox flag={!data.installment}></Checkbox>
                                <span>不分期</span>
                            </p>
                        </div>
                    </li>
                    <li>
                        <span>支付内容</span>
                        <p><input type="text" value={data.info} onChange={this.handleChange} name="info"/></p>
                    </li>
                    <li>
                        <span>支付金额</span>
                        <p><input type="text" value={data.price} onChange={this.handleChange} name="price"/> <b>元</b>
                        </p>
                    </li>
                    <li onClick={this.gotoDiscount}>
                        <span>优惠方案</span>
                        <p>
                            {data.isDiscount?'优惠方案':'暂无优惠方案'}<b className="right"></b>
                        </p>
                    </li>
                </ul>
            </Fragment>
        );
    }
    gotoDiscount(){
        this.props.history.push('/discount')
    }
    handleChange(e){

        this.props.updateWayData(e.target.value,this.props.name,e.target.name)
    }
    componentWillReceiveProps(nextProps){
        
    }
}

export default withRouter(WayItem);