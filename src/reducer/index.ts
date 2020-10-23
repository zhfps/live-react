import { Action } from '../actions/index'

const initState = {
  value: 1
}

export function reducer(state = initState,action:Action){
  if(action.type === 'TestAction'){
      state.value = action.value
      return Object.assign({},state)
  }else{
    return state
  }
}