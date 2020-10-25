import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import routes from '../../router/index'
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
        <Router>
          <div className="el-container">
            <div className="el-slider" style={{overflowY:'auto',width: '256px',}}>
              <Slider></Slider>
            </div>
            <div className="el-page" style={{width:'100%'}}>
            <Switch>
                {routes.map((route, index) => (
                  // You can render a <Route> in as many places
                  // as you want in your app. It will render along
                  // with any other <Route>s that also match the URL.
                  // So, a sidebar or breadcrumbs or anything else
                  // that requires you to render multiple things
                  // in multiple places at the same URL is nothing
                  // more than multiple <Route>s.
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                  />
                ))}
           </Switch>
            </div>
            </div>
          </Router>
      </div>
     )
   }
}