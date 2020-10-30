import React,{Component} from 'react'
import { Steps,Row, Col,Card} from 'antd'
import { todolist,TodoItem } from '../../config/todolist'
const { Step } = Steps

export default class Home extends Component{

  getSteps =(list:TodoItem[])=>{
   return list.map(item=>{
      return (
        <Step title={item.title} description={item.description} status={item.status}/>
      )
    })
  }

  render(){
    return(
      <Row gutter={16}>
      <Col span={8}>
        <Card title="开发计划">
          <Steps direction="vertical">
            {this.getSteps(todolist.filter(item=>item.type === 'plan'))}
          </Steps>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="学习计划" >
        <Steps direction="vertical">
            {this.getSteps(todolist.filter(item=>item.type === 'learn'))}
          </Steps>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="问题记录">
        <Steps direction="vertical">
            {this.getSteps(todolist.filter(item=>item.type === 'log'))}
          </Steps>
        </Card>
      </Col>
    </Row>      
    )
  }
}