import { useEffect } from 'react'
import localforage from 'localforage'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { useFiles } from 'resources/files/use-files'

export function App () {
  const {
    handleUpdateFileContent,
    handleUpdateFileName,
    inputRef,
    handleRemoveFile,
    handleSelectFile,
    files,
    handleCreateNewFile,
  } = useFiles()

  useEffect(() => {
    async function storage () {
      // await localforage.setItem('files', [{ id: 1, lala: true }])
      const value = await localforage.getItem('files')
      console.log('valor do storage:', value)
    }

    storage()
  }, [])

  return (
    <Main>
      <Sidebar
        files={files}
        onNewFile={handleCreateNewFile}
        onSelectFile={handleSelectFile}
        onRemoveFile={handleRemoveFile}
      />

      <Content
        inputRef={inputRef}
        file={files.find(file => file.active === true)}
        onUpdateFileName={handleUpdateFileName}
        onUpdateFileContent={handleUpdateFileContent}
      />
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  height: 100vh;
`
