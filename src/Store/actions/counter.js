import ActionType from '../actions/ActionType'

export const increment = () => {
  return {
    type: ActionType.inc_counter
  }
}

export const decrement = () => {
  return {
    type: ActionType.dcr_counter
  }
}
export const add = (val) => {
  return {
    type: ActionType.add_counter,
    val
  }
}
export const subtract = (val) => {
  return {
    type: ActionType.sub_counter,
    val
  }
}