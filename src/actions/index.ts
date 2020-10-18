export interface Action{
  type:string,
  value: number
}

export function TestAction(val:number):Action{
  return {
    type: 'TestAction',
    value: val
  }
}