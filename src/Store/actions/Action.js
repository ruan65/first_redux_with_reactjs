export const Action = {
  inc_counter: 'INC_COUNTER',
  dcr_counter: 'DCR_COUNTER',
  add_counter: 'ADD_COUNTER',
  sub_counter: 'SUB_COUNTER',
  store_result: 'STORE_RESULT',
  delete_result: 'DELETE_RESULT'
}

export const increment = () => {
  return {
    type: Action.inc_counter
  }
}

export const decrement = () => {
  return {
    type: Action.dcr_counter
  }
}
export const add = (val) => {
  return {
    type: Action.add_counter,
    val
  }
}
export const subtract = (val) => {
  return {
    type: Action.sub_counter,
    val
  }
}
export const storeResult = (result) => {
  return {
    type: Action.store_result,
    result
  }
}
export const deleteResult = (id) => {
  return {
    type: Action.delete_result,
    id
  }
}