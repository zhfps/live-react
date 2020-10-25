import React from 'react'
import Header from '../header/index'
import Slider from '../slider/index'


export default class Zh_Layout extends React.Component{
  // handleClick = e => {
  //   console.log('click ', e);
  // };
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

          </div>
          </div>
      </div>
     )
   }
}