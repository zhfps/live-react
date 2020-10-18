import React from 'react'
import store from '../../store'
import { TestAction } from '../../actions'
export default class Home extends React.Component{

  handleOnclick = () => {
    const action = TestAction(store.getState().value++)
    store.dispatch(action)
  }
  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }
  render(){
    return (
      <div>
        <div>{store.getState().value}</div>
        <button onClick = { this.handleOnclick }>点击我</button>
      </div>
      
    )
  }
}