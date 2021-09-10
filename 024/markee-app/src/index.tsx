import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Root } from './root'

ReactDOM.render(
  <StrictMode>
    <Root />
  </StrictMode>,
  document.querySelector('[data-js="app"]'),
)
