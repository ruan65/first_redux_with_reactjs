import { Action } from '../actions/Action'

const initialState = {
  results: []
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case Action.store_result:
      return {
        ...state,
        results: [...state.results, { id: new Date().getMilliseconds(), value: action.result }]
      }
    case Action.delete_result:
      return { ...state, results: state.results.filter( el => el.id !== action.id ) }
    default:
      break
  }
  return state
}

export default reducer