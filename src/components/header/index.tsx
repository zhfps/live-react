import React,{ Component } from 'react'

export default class Header extends Component{
  render(){
    return (
         <nav className="level">
              <div className="level-left">
                  <div className="level-item">
                    
                  </div>
                  <div className="level-item">
                    
                  </div>
              </div>
              <div className="level-right">          
                <p className="level-item"><a>Published</a></p>
                <p className="level-item"><a>Drafts</a></p>
                <p className="level-item"><a>Deleted</a></p>
                <p className="level-item"></p>
              </div>
       </nav>
    )
  }
}