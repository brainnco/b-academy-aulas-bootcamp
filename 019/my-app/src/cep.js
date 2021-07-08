import style from './cep.module.css'

function Cep ({ cep, setCep }) {
  function handleSubmit (e) {
    e.preventDefault()
    setCep(e.target.elements.campoCep.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='campoCep' className={style.input} />
        <button type='submit'>Busca CEP</button>
      </form>
    </>
  )
}

export default Cep
