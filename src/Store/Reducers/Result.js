import ActionType from '../actions/ActionType'

const initialState = {
  results: []
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ActionType.store_result:
      return {
        ...state,
        results: [...state.results, { id: new Date().getMilliseconds(), value: action.result }]
      }
    case ActionType.delete_result:
      return { ...state, results: state.results.filter( el => el.id !== action.id ) }
    default:
      break
  }
  return state
}

export default reducer