import ActionType from '../actions/ActionType'
import { updateObject } from '../utility'

const initialState = {
  counter: 0
}

const reducer = ( state = initialState, action ) => {
  
  switch ( action.type ) {
    
    case ActionType.inc_counter:
      return updateObject(state, {counter: state.counter + 1})
    case ActionType.dcr_counter:
      return updateObject(state, {counter: state.counter - 1})
    case ActionType.add_counter:
      return updateObject(state, {counter: state.counter + action.val})
    case ActionType.sub_counter:
      return updateObject(state, {counter: state.counter - action.val})
    default:
      break
  }
  return state
}

export default reducer