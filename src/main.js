import App from './app.jsx'
import './common/reset.css'
import React,{Component} from 'react'
import {render} from 'react-dom'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
let root = document.querySelector('#root')
//import Index from './pages/Index/Index.jsx'
//import Discount from './pages/Discount/Discount.jsx'
//import Confirm from './pages/Confirm/Confirm.jsx'
import LazyLoad from './components/LazyLoad/LazyLoad.jsx';
import Loading from './components/Loading/Loading.jsx';
let Index = LazyLoad({
    component:()=>import(/* webpackChunkName: 'index' */ './pages/Index/Index.jsx'),
    loading:<Loading></Loading>
})
let Discount = LazyLoad({
    component:()=>import(/* webpackChunkName: 'discount' */ './pages/Discount/Discount.jsx'),
})
let Confirm = LazyLoad({
    component:()=>import(/* webpackChunkName: 'confirm' */ './pages/Confirm/Confirm.jsx'),
    loading:<Loading></Loading>
})

render(<Router>
    <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path="/discount" component={Discount}></Route>
        <Route path="/confirm" component={Confirm}></Route>
    </Switch>
</Router>,root);