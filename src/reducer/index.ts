import { Action } from '../actions/index'

const initState = {
  value: 1
}

export function reducer(state = initState,action:Action){
  if(action.type === 'TestAction'){
      return Object.assign(state,action.value)
  }
}