import React, { Component } from 'react';

class Fees extends Component {
    constructor(){
        super()
        this.state={
            fname:'',
            fee:''
        }
        this.handleChange = this.handleChange.bind(this)
    }
    render() {
        return (
            <li>
                <input type="text" placeholder="输入收费项名称" name="fname" onChange={this.handleChange} value={this.state.fname} />
                <input type="text" placeholder="输入收费金额" name="fee" onChange={this.handleChange} value={this.state.fee} />
                <b className="yuan">元</b>
                <p className="del" onClick={()=>{this.delFee(this.props.id)}}></p>
            </li>
        )
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    delFee(id){
        console.log(id)
        this.props.callback(id)
    }
}

export default Fees;