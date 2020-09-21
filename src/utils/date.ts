export type FormattedDate = {
  datetime: string
  isNew: boolean
}

export const formatDate = (d: Date, now: Date): FormattedDate => {
  return {
    datetime: '2020/9/21 11:22:00',
    isNew: true,
  }
}
