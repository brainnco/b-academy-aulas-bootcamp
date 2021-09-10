import styled, { css } from 'styled-components/macro'

function App () {
  return (
    <Title arroz='a'>App</Title>
  )
}

type TitleProps = {
  arroz: string
}

const Title = styled.h1<TitleProps>`${({ theme }) => css`
  background: ${theme.colors.black};
  color: ${theme.colors.primary};
`}`

export { App }
