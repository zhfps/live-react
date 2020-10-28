import React,{ Component } from 'react'
import { Link } from "react-router-dom";
import { Menu  } from 'antd'
import routes,{ RouteModle } from '../../router/index'
const { SubMenu } = Menu;
export default class Slider  extends Component{
  GetMenus = (routes:RouteModle[],path:string,index:number):any => {
    let self = this
    index++
   return routes.map(item=>{
      let url = path + item.path
      if(item.children && item.children.length>0){       
       return (
          <SubMenu
              key={index}
              title={
                <span>
                  {item.icon}
                  <span>{item.title}</span>
                </span>
              }
            >
            {
              self.GetMenus(item.children,url,index)
            }
          </SubMenu>
       ) 
      }else{  
        index++
        if(!item.hide){
          return(
            <Menu.Item key={index}>{item.icon}<span><Link to={url}>{item.title}</Link></span></Menu.Item>
        )
        }
      }
    })
  }
  render(){
    return (
         <>
          <Menu
            style={{ width: 216 }}
            defaultSelectedKeys={['3']}
            defaultOpenKeys={['1']}
            mode="inline"
          >
           {this.GetMenus(routes,"",0)}
          </Menu>                   
         </>
    )
  }
}