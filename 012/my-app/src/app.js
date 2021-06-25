import { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(null)

  console.log('state:', counter)

  function decrement () {
    setCounter(counter - 1)
  }

  function increment () {
    setCounter(counter + 1)
  }

  return (
    <>
      <h1>
        {!counter && 'Contador vazio'} 
        {!!counter && 'Contador: ' + counter} 
      </h1>

      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
