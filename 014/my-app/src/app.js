import { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(0)

  function handleCounter () {
    setCounter((prevState) => prevState + 1)
  }

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Atualizar contador</button>
    </>
  )
}

export default App
