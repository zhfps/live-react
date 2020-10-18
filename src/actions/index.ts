export interface Action{
  type:string,
  value: any
}

export function TestAction(val:any):Action{
  return {
    type: 'TestAction',
    value: val
  }
}