import { useState, ChangeEvent, RefObject } from 'react'
import * as S from './content-style'
import marked from 'marked'

import 'highlight.js/styles/github.css'

import('highlight.js').then(hljs => {
  const h = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && h.getLanguage(language)) {
        return h.highlight(code, { language }).value
      }

      return h.highlightAuto(code).value
    },
  })
})

type ContentProps = {
  inputRef: RefObject<HTMLInputElement>
}

export function Content ({ inputRef }: ContentProps) {
  const [content, setContent] = useState('')

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input defaultValue='Sem título' ref={inputRef} />
      </S.Header>

      <S.ContentSection>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={content}
          onChange={handleChange}
        />

        <S.Article dangerouslySetInnerHTML={{ __html: marked(content) }} />
      </S.ContentSection>
    </S.ContentWrapper>
  )
}
