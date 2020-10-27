import React from "react"
import { AppstoreOutlined, MailOutlined} from '@ant-design/icons'
export interface RouteModle{
  path: string,
  exact: boolean,
  title: string,
  icon?: any,
  children?:RouteModle[],
  component?:any,
}
const routes:RouteModle[] = [
  {
    path: "",
    exact: true,
    title: 'Test',
    children:[
      {
        path: "/bubblegum",
        exact: true,
        title: 'bubblegum',
        icon: <AppstoreOutlined/>,
        component: () => <h2>Bubblegum</h2>
      },
      {
        path: "/shoelaces",
        exact: true,
        title: 'shoelaces',
        icon:<MailOutlined/>,
        component: () => <h2>Shoelaces</h2>
      }
    ]
  }
]

export default routes