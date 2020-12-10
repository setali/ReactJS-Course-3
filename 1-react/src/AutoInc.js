import { useState, useEffect } from 'react'

function App() {
  const [show, setShow] = useState(true)

  function hide() {
    setShow(false)
  }

  return (
    <div>
      {show && <AutoInc />}
      <hr/>
      {show ?
        <button onClick={hide}>Hide</button> :
        <button onClick={() => setShow(true)}>Show</button>
      }
    </div>
  )
}

function AutoInc() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // setCounter(function (counter) {
      //   return counter + 1
      // })

      setCounter(state => state + 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  return counter
}

function AutoIncSetTimeOut() {

  const [counter, setCounter] = useState(0)


  // cDM
  // cDU
  // cWU
  useEffect(() => {
    const timeoutId = setTimeout(() => setCounter(counter + 1), 1000)
    console.log(timeoutId)
    return () => {
      console.log('Component will unmount', counter)
      clearTimeout(timeoutId)
    }
  }, [counter])

  // useEffect(() => setTimeout())


  return counter
}

export default App

