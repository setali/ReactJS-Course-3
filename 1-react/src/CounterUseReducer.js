import {useReducer} from 'react'

const initialState = 0

function reducer(state, action) {

  console.log(state, action)

  switch (action.type) {
    case 'ADD':
      return state + (action.payload || 1)

    case 'SUB':
      return state - (action.payload || 1)

    case 'RESET':
      return initialState

    default:
      return state
  }
}

function Counter() {

  const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <div>
      {state}
      <hr/>
      <button onClick={() => dispatch({type: 'ADD'})}>+</button>
      <button onClick={() => dispatch({type: 'ADD', payload: 2})}>+2</button>
      <button onClick={() => dispatch({type: 'ADD', payload: 3})}>+3</button>
      <button onClick={() => dispatch({type: 'SUB'})}>-</button>
      <button onClick={() => dispatch({type: 'SUB', payload: 5})}>-5</button>
      <button onClick={() => dispatch({type: 'RESET'})}>RESET</button>
    </div>
  )
}

export default Counter
