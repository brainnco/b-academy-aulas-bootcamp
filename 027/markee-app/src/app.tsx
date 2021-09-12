import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  return (
    <Main>
      <Sidebar />
      <Content />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
