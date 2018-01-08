const redux = require('redux')

const Action = {
  inc_counter: 'INC_COUNTER',
  add_counter: 'ADD_COUNTER'
}

const createStore = redux.createStore

const initialState = {
  counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case Action.inc_counter:
      return {
        ...state,
        counter: state.counter + 1
      }
    case Action.add_counter:
      return {
        ...state,
        counter: state.counter + action.value
      }
    default:
      break
  }
  return state
}

// Store
const store = createStore(rootReducer)

// Subscription

store.subscribe(() => {
  console.log('[Subscription]', store.getState())
})

console.log(store.getState())

// Dispatching Action
store.dispatch({type: Action.inc_counter})
store.dispatch({type: Action.add_counter, value: 100})
console.log(store.getState())


