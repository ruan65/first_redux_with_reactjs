export const Action = {
  inc_counter: 'INC_COUNTER',
  dcr_counter: 'DCR_COUNTER',
  add_counter: 'ADD_COUNTER',
  sub_counter: 'SUB_COUNTER',
  store_result: 'STORE_RESULT',
  delete_result: 'DELETE_RESULT'
}

const initialState = {
  counter: 0,
  results: []
}

const reducer = (state = initialState, action) => {
  switch ( action.type ) {
    
    case Action.inc_counter:
      return {...state, counter: state.counter + 1}
    case Action.dcr_counter:
      return {...state, counter: state.counter - 1}
    case Action.add_counter:
      return {...state, counter: state.counter + action.val}
    case Action.sub_counter:
      return {...state, counter: state.counter - action.val}
    case Action.store_result:
      return {...state, results: [...state.results, state.counter]}
    case Action.delete_result:
      let newRes = [...state.results]
      return {...state, results: newRes.slice(0, newRes.length -1)}
    default:
      break
  }
  return state
}

export default reducer