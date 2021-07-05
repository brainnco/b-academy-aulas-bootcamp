const url = 'https://ws.apicep.com/cep.json?code=[CEP]'

function App () {
  async function handleClick () {
    console.log('buscando cep...')
    const response = await fetch(url.replace('[CEP]', '06233-03'))
    const json = await response.json()
    console.log('cep:', json)
  }

  return (
    <>
      <button onClick={handleClick}>Buscar CEP</button>
    </>
  )
}

export default App
