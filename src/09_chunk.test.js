import {chunk} from './09_chunk'

describe('chunk', () => {
  it('should chunk', () => {
    expect(
      chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 1)
    ).toMatchSnapshot()

    expect(
      chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 2)
    ).toMatchSnapshot()

    expect(
      chunk(['a', 'b', 12, true, false, undefined, null, 'aa'], 3)
    ).toMatchSnapshot()

    expect(chunk([], 2)).toMatchSnapshot()

    expect(chunk([42], 2)).toMatchSnapshot()

    expect(chunk(undefined, 4)).toMatchSnapshot()

    expect(chunk(32, 2)).toMatchSnapshot()

    expect(chunk({a: 12, b: 32, c: 45}, 2)).toMatchSnapshot()
  })
})
