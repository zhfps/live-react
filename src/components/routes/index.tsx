import React from 'react'
import { Route } from "react-router-dom"
import routes,{ RouteModle } from '../../router/index'
export default class Menu extends React.Component{

  GetRoute = (routes:RouteModle[],path:string,index:number):any => {
    let self = this
   return routes.map(item=>{
      let url = path + item.path
      if(item.children && item.children.length>0){       
       return self.GetRoute(item.children,url,index) 
      }else{  
        index++
        return(
          <Route
              key={index}
              path={url}
              exact={item.exact}
              children={<item.component/>}
           />
        )
        
      }
    })
  }
  render(){
    return(
      <>
      {this.GetRoute(routes,"",0)}
      </>
    )
  }
}