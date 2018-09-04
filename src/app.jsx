import React,{Component} from 'react'
import './app.css'
import img from './assets/2.png'
function App(props){
    console.log(props)
    return <div>
        <div className="test"></div>
        <img src={img} alt=""/>
        <h1>hello {props.name}</h1>
        </div>
}

export default App