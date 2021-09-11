import * as S from './app-styles'

function App () {
  return (
    <>
      <S.Title>
        App {' '}
        <S.Span>texto do span</S.Span> {' '}
        <S.SpanStyled>texto itálico</S.SpanStyled> {' '}
      </S.Title>
    </>
  )
}

export { App }
