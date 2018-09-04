import React, { Component } from 'react';
//高阶组件  高阶函数

function LazyLoad(options){
    return class extends Component{
        constructor(){
            super()
            this.state={
                component:null,
                loading: options.loading || <h1>loading</h1>
            }
        }
        render(){
            let {component,loading} = this.state;
            return component || loading
        }
        componentDidMount(){
            options.component().then(o=>{
                setTimeout(()=>{
                    this.setState({
                        component:<o.default></o.default>
                    })
                },1500)
            })        
        }
    }   
}


export default LazyLoad;