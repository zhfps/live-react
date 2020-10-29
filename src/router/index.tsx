import React from "react"
import { AppstoreOutlined, InsuranceOutlined,UnorderedListOutlined} from '@ant-design/icons'
export interface RouteModle{
  path: string,
  exact: boolean,
  title: string,
  hide?:boolean,
  icon?: any,
  children?:RouteModle[],
  component?:any,
}
const routes:RouteModle[] = [
  {
    path: "",
    exact: true,
    title: '主页',
    icon:<UnorderedListOutlined />,
    children:[
     {
        path: "/",
        exact: true,
        title: '访问记录',
        icon: <AppstoreOutlined/>,
        component: () => <h2>访问记录</h2>
      },
      {
        path: "/shoelaces",
        exact: true,
        title: '控制台',
        icon:<InsuranceOutlined />,
        component: () => <h2>控制台</h2>
      }
    ]
  }
]

export default routes