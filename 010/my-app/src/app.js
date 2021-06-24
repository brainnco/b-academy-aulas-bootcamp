import { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(0)

  console.log('state:', counter)

  function decrement () {
    setCounter(counter - 1)
  }

  function increment () {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>Contador: {counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
