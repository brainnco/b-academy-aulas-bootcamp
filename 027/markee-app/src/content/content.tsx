import * as S from './content-style'

export function Content () {
  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input defaultValue='Sem título' />
      </S.Header>

      <S.ContentSection>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
        />

        <S.Article>
          <h1>Bootcamp Brainn Co.</h1>
          <p>Lorem ipsum dolor sit amet simet</p>
        </S.Article>
      </S.ContentSection>
    </S.ContentWrapper>
  )
}
