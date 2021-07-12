import styled from 'styled-components'

function Counter ({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <MeuInput type='text' />
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>
  )
}

const MeuInput = styled.input`
  background: red;
  color: white;
`

export default Counter
