import {memoize} from './14_memoize'

describe('memoize', () => {
  it('should compute the value only once', () => {
    const myMock = jest.fn((...args) => args)
    const memoized = memoize(myMock)

    expect(memoized(42)).toMatchSnapshot()
    expect(memoized(42)).toMatchSnapshot()
    expect(myMock).toHaveBeenCalledTimes(1)
  })

  it('should work with multiple arguments', () => {
    const myMock = jest.fn((...args) => args)
    const memoized = memoize(myMock)

    expect(memoized(42, 'hello', true)).toMatchSnapshot()
    expect(memoized(42, 'hello', true)).toMatchSnapshot()
    expect(myMock).toHaveBeenCalledTimes(1)
  })

  it('recompute with new arguments', () => {
    const myMock = jest.fn((...args) => args)
    const memoized = memoize(myMock)

    expect(memoized(42, 'hello', true)).toMatchSnapshot()
    expect(memoized(43)).toMatchSnapshot()
    expect(myMock).toHaveBeenCalledTimes(2)
  })
})
