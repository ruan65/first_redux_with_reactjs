import ActionType from '../actions/ActionType'

export const saveResult = result => {
  
  result *= 2
  
  return {
    type: ActionType.store_result,
    result
  }
}

export const storeResult = (res) => {
  return dispatch => {
    setTimeout(() => dispatch(saveResult(res)), 2000)
  }
}

export const deleteResult = (id) => {
  return {
    type: ActionType.delete_result,
    id
  }
}