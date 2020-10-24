import React from 'react'
import { Menu, Button  } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
export default class Zh_Layout extends React.Component{
  // handleClick = e => {
  //   console.log('click ', e);
  // };
   render(){
     return (
      <div className="el-context">
        <div className="el-header is-primary">
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
        </div>
        <div className="el-container">
          <div className="el-slider" style={{overflowY:'auto',width: '256px',}}>
          <Menu
       // onClick={this.handleClick}
        style={{ width: 216 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <MailOutlined />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu
          key="sub4"
          title={
            <span>
              <SettingOutlined />
              <span>Navigation Three</span>
            </span>
          }
        >
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </Menu>                    
          </div>
          <div className="el-page" style={{width:'100%'}}>

            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/> <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
            <Button>点击</Button><br/>
     
          </div>
          </div>
      </div>
     )
   }
}