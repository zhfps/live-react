import React,{ Component } from 'react'
import { Avatar } from 'antd';
import logo from '../../asset/logo/logo.png'
export default class Header extends Component{
  render(){
    return (
         <nav className="level">
              <div className="level-left">
                  <div className="level-item">
                    <img src={logo}></img>
                  </div>
                  <div className="level-item">
                   
                  </div>
              </div>
              <div className="level-right">          
                <p className="level-item"></p>
                <p className="level-item"></p>
                <p className="level-item"></p>
                <div className="level-item">
                <Avatar style={{ backgroundColor: '#87d068' }}>zh</Avatar>
                </div>
              </div>
       </nav>
    )
  }
}