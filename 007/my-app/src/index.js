import ReactDOM from 'react-dom'

function Title ({ text }) {
  return (
    <h1>{text}</h1>
  )
}

ReactDOM.render(
  <Title text='hello' />,
  document.querySelector('#root')
)
