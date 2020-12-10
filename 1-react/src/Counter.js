import {useState} from 'react'

function Counter() {

  const [counter, setCounter] = useState(0)

  return (
    <div>
      {counter}
      <hr/>
      <button onClick={() => setCounter(s => s + 1)}>+</button>
      <button onClick={() => setCounter(s => s - 1)}>-</button>
    </div>
  )
}

export default Counter