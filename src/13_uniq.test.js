import {uniq} from './13_uniq'

describe('uniq', () => {
  it('should remove duplicate', () => {
    expect(uniq([1, 2, 3, 4])).toMatchSnapshot()
    expect(uniq([1, 1])).toMatchSnapshot()
    expect(uniq([null, null, true, true])).toMatchSnapshot()
    expect(uniq([{a: 32}, {a: 32}, {a: 32, b: 21}])).toMatchSnapshot()
  })
})
