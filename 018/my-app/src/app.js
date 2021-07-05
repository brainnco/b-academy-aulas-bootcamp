import { useEffect, useState } from 'react'

function App () {
  const [counter, setCounter] = useState(1)

  return (
    <>
      {counter > 0 && <Counter counter={counter} />}
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>
  )
}

function Counter ({ counter }) {
  console.log('counter')

  useEffect(() => {
    console.log('useEffect de counter!')

    return () => {
      console.log('clean effect de counter')
    }
  })

  return (
    <>
      <h1>{counter}</h1>
    </>
  )
}

export default App
