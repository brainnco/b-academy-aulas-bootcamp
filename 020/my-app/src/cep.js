import styled from 'styled-components'

function Cep ({ cep, setCep, color }) {
  function handleSubmit (e) {
    e.preventDefault()
    setCep(e.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input type='text' name='campoCep' bgColor={color} />
        <Button type='submit'>Busca CEP</Button>
      </form>
    </>
  )
}

const Input = styled.input`
  background-color: ${(props) => props.bgColor};
  color: white;
`

const Button = styled.button``

export default Cep
