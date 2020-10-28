import React from 'react'
import { Switch } from "react-router-dom"
import Header from '../header/index'
import Slider from '../slider/index'
import Routes from '../routes/index'


export default class Zh_Layout extends React.Component{

   render(){
     return (
      <div className="el-context">
        <div className="el-header is-primary">
          <Header/>
        </div>
          <div className="el-container">
            <div className="el-slider" style={{overflowY:'auto',width: '256px',}}>
              <Slider></Slider>
            </div>
            <div className="el-page" style={{width:'100%'}}>
              <Switch>
                <Routes/>
              </Switch>
            </div>
          </div>
      </div>
     )
   }
}