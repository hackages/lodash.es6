import {zipObject} from './11_zipObject'

describe('zipObject', () => {
  it('should zip', () => {
    expect(zipObject(['a', 'b'], [1, 2])).toMatchSnapshot()
    expect(zipObject(['a'], [1, 2])).toMatchSnapshot()
    expect(zipObject(['a', 'b'], [1])).toMatchSnapshot()
    expect(zipObject(['hello'], [true])).toMatchSnapshot()
    expect(zipObject([32], [false])).toMatchSnapshot()
    expect(zipObject([true], ['or not'])).toMatchSnapshot()
  })
})
