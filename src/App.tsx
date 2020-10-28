import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"
import './App.css'

import Layout from './components/layout'
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <div>login</div>
          </Route>
          <Route path="/">
            <Layout/>
          </Route>  
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
