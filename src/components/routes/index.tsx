import React from 'react'
import { Route,Redirect } from "react-router-dom"
import routes,{ RouteModle } from '../../router/index'
const auth = true
export default class Menu extends React.Component{
  GetRoute = (routes:RouteModle[],href:string,index:number):any => {
    let self = this
   return routes.map(item=>{
      let url = href + item.path
      if(item.children && item.children.length>0){       
       return self.GetRoute(item.children,url,index) 
      }else{  
        index++
        if(auth){
          return(
            <Route
                key={index}
                path={url}
                exact={item.exact}
                children={<item.component/>}
             />
          )
        }else{
          return (
            <Route 
            key={index}
            render={ ()=>(
              <Redirect to='/login'></Redirect>
            )
            } />
          )
        }
        
        
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