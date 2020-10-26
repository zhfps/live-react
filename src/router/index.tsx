import React from "react"
export interface RouteModle{
  path: string,
  exact: boolean,
  children?:RouteModle[],
  component?:any,
}
const routes:RouteModle[] = [
  {
    path: "",
    exact: true,
    children:[
      {
        path: "/bubblegum",
        exact: true,
        component: () => <h2>Bubblegum</h2>
      },
      {
        path: "/shoelaces",
        exact: true,
        component: () => <h2>Shoelaces</h2>
      }
    ]
  }
]

export default routes