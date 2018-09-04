import React,{createRef} from 'react';
import {withRouter} from 'react-router-dom'
import Header from '../../components/header/Header.jsx'

import ZhiDan from './zhidan.jsx'
import './index.css'
/* import LazyLoad from '../../components/LazyLoad/LazyLoad.jsx';

let ZhiDan = LazyLoad({
    component:()=>import('./zhidan.jsx')
})
 */
class Index extends React.Component {
    constructor(props) {
        super()
        this.zd0 = createRef();
        this.state = {
            title: '收费制单',
            zdlist:[<ZhiDan key={"0"} first ref={this.zd0} />]
        }
        this.addCharge = this.addCharge.bind(this)
        this.collectData = this.collectData.bind(this)
        
    }

    render() {
        return <div className="index">
            <Header title={this.state.title} />
            <section>
                {this.state.zdlist}

                <div className="add-scheme">
                    <p onClick={this.addCharge}>
                        <b></b>
                        <span>添加新的收费方案</span>
                    </p>
                </div>
                <div className="finish">
                    <div onClick={this.collectData}>
                        完成制单
                    </div>
                </div>
            </section>
        </div>
    }
    addCharge(){
        let {zdlist} = this.state;
        this['zd'+zdlist.length] = createRef();
        this.setState({
            zdlist: [...zdlist,<ZhiDan ref={this['zd'+zdlist.length]} key={zdlist.length} />]
        })
    }
    collectData(data){
        let {zdlist} = this.state;
        let zdItem =[];
        zdlist.forEach((item,index)=>{

            let {state,refs} = this['zd'+index].current;
            
            let {feename,grade,feeslist} = state;
            let {w} = refs;
            let o={}
            o.feename = feename;
            o.grade = grade;
            o.payways = w.state.ways;

            o.feeslist = feeslist.map((item,index)=>{
                return item.ref.current.state
            })
             
            zdItem.push(o)
        })
        this.props.history.push('/confirm')
    }
}
export default withRouter(Index)