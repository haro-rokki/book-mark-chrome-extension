import { formatDate } from './date'

describe('formatDate', () => {
  const now = new Date('2020-09-21 11:22:00')
  test('作成してすぐ', () => {
    expect(formatDate(new Date(now), now)).toEqual({
      datetime: '2020/09/21 11:22',
      isNew: true,
    })
  })

  test('1週間経過', () => {
    expect(formatDate(new Date('2020-09-14 11:22:00'), now)).toEqual({
      datetime: '2020/09/14 11:22',
      isNew: false,
    })
  })
})
