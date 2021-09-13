export type Status = 'editing' | 'saving' | 'saved'

export type File = {
  id: string
  name: string
  content: string
  active: boolean
  status: Status
}
