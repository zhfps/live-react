import React from 'react'
import { connect } from 'react-redux'
import store from '../../store'
import { TestAction } from '../../actions'
import { Button } from 'antd';
interface IProp{
  value:number,
  dispath: any
}
 class Home extends React.Component<IProp>{

  handleOnclick = () => {
    let {value} = this.props
    value+=1
    const action  = TestAction(value)
    this.props.dispath(action)
  }

  render(){
    return (
      <div>
        <div>{store.getState().value}</div>
        <Button size='small' onClick = { this.handleOnclick }>点击我</Button>
      </div>
      
    )
  }
}

const mapStateToProps = (state:any)=>{
    const { value } = state
    return {
      value
    }
}


const mapDispatchToProps = (dispath:any) =>{
  return {
    dispath
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)