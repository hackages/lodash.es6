import {zip} from './10_zip'

describe('zip', () => {
  it('should zip', () => {
    expect(zip(['a', 'b'], [1, 2], [true, false])).toMatchSnapshot()
    expect(zip(['a'], [1, 2], [true, true, false])).toMatchSnapshot()
    expect(zip(['a', 'b', 'c'], [1, 2], [true])).toMatchSnapshot()
    expect(zip(['hello'], [undefined])).toMatchSnapshot()
    expect(zip([32], 'ohoh')).toMatchSnapshot()
    expect(zip([32])).toMatchSnapshot()
    expect(zip(32)).toMatchSnapshot()
  })
})
