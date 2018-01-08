export const Action = {
  inc_counter: 'INC_COUNTER',
  dcr_counter: 'DCR_COUNTER',
  add_counter: 'ADD_COUNTER',
  sub_counter: 'SUB_COUNTER'
}

const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    
    case Action.inc_counter:
      return { counter: state.counter + 1}
    case Action.dcr_counter:
      return { counter: state.counter - 1}
    case Action.add_counter:
      return { counter: state.counter + 10}
    case Action.sub_counter:
      return { counter: state.counter - 10}
    default:
      break
  }
  return state
}

export default reducer