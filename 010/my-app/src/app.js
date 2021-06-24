function App () {
  function handleClick () {
    alert('clicou!')
  }

  return (
    <button onClick={handleClick}>Clique aqui!</button>
  )
}

export default App
