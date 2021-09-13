import { ChangeEvent, RefObject } from 'react'
import marked from 'marked'
import { File } from 'resources/files/types'
import * as S from './content-style'

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
  file?: File
  onUpdateFileName: (id: string) => (e: ChangeEvent<HTMLInputElement>) => void
  onUpdateFileContent: (id: string) => (e: ChangeEvent<HTMLTextAreaElement>) => void
}

export function Content ({
  inputRef,
  file,
  onUpdateFileName,
  onUpdateFileContent,
}: ContentProps) {
  if (!file) {
    return null
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.Input
          ref={inputRef}
          value={file.name}
          onChange={onUpdateFileName(file.id)}
          autoFocus
        />
      </S.Header>

      <S.ContentSection>
        <S.Textarea
          placeholder='Digite aqui seu markdown'
          value={file.content}
          onChange={onUpdateFileContent(file.id)}
        />

        <S.Article dangerouslySetInnerHTML={{ __html: marked(file.content) }} />
      </S.ContentSection>
    </S.ContentWrapper>
  )
}
