export interface TodoItem{

  title: string,
  description: string,
  status: 'wait' | 'process' | 'finish' | 'error',
  type: 'plan' | 'learn' | 'log' 

}

export const todolist:TodoItem[] = [
  {
    title: '2020/10/30',
    description: "添加开发步骤",
    status: "finish",
    type: 'plan'
  },{
    title: '2020/10/30',
    description: "gitee部署",
    status: "process",
    type: 'plan'
  },
   {
    title: '2020/10/30',
    description: "React 持续学习",
    status: "process",
    type: 'learn'
  },
   {
    title: '2020/10/30',
    description: "React 持续学习",
    status: "process",
    type: 'log'
  }
] 