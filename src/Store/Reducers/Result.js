import ActionType from '../actions/ActionType'
import { updateObject } from '../utility'

const initialState = {
  results: []
}

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ActionType.store_result:
      return updateObject( state,
        {
          results: [...state.results,
            {
              id: new Date().getMilliseconds(),
              value: action.result
            }]
        } )
    
    case ActionType.delete_result:
      return updateObject( state, { results: state.results.filter( el => el.id !== action.id ) } )
    default:
      break
  }
  return state
}

export default reducer