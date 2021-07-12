import { useEffect, useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import Counter from './counter'
import Cep from './cep'

const GlobalStyle = createGlobalStyle`
  body {
    background: gray;
  }
`

function getCepUrl (cep) {
  return 'https://ws.apicep.com/cep.json?code=[CEP]'
    .replace('[CEP]', cep)
}

function App () {
  const [counter, setCounter] = useState(0)
  const [cep, setCep] = useState(null)

  useEffect(() => {
    console.log('use effect app')
    function searchCep () {
      if (cep === null) {
        return
      }

      fetch(getCepUrl(cep))
        .then(result => result.json())
        .then(result => console.log('resultado:', result))
    }

    searchCep()

    return () => {
      console.log('clean app')
    }
  }, [cep])

  return (
    <>
      <GlobalStyle />
      <Counter counter={counter} setCounter={setCounter} />
      <Cep cep={cep} setCep={setCep} color='blue' />
    </>
  )
}

export default App
