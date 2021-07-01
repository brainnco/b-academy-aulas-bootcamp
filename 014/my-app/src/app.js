import { useState } from 'react'

function App () {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Title>{counter}</Title>
      <Buttons setCounter={setCounter} />
    </>
  )
}

function Title ({ children }) {
  return <h1>{children}</h1>
}

function Buttons ({ setCounter }) {
  function increment () {
    setCounter((prevState) => prevState + 1)
  }

  function decrement () {
    setCounter((prevState) => prevState - 1)
  }

  return (
    <>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  )
}

export default App
