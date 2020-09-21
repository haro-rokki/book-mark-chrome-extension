import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-09-21 11:22:00')
  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020/09/21 11:22',
      isNew: true,
    })
  })
})
