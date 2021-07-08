import style from './counter.module.css'
console.log('style:', style)

function Counter ({ counter, setCounter }) {
  return (
    <>
      <h1>{counter}</h1>
      <input type='text' className={style.input} />
      <button onClick={() => setCounter(c => c - 1)}>-</button>
      <button onClick={() => setCounter(c => c + 1)}>+</button>
    </>
  )
}

export default Counter
