import { Action } from '../actions/Action'

const initialState = {
  counter: 0
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    
    case Action.inc_counter:
      return { ...state, counter: state.counter + 1 }
    case Action.dcr_counter:
      return { ...state, counter: state.counter - 1 }
    case Action.add_counter:
      return { ...state, counter: state.counter + action.val }
    case Action.sub_counter:
      return { ...state, counter: state.counter - action.val }
    default:
      break
  }
  return state
}

export default reducer