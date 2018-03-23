import {map} from './04_map'

describe('map', () => {
  it('it should work with the identity function', () => {
    const results = map([1, 2, 3, 4], x => x)

    expect(results).toMatchSnapshot()
  })

  it('it should return the index', () => {
    const results = map([1, 1, 1], (x, index) => index)

    expect(results).toMatchSnapshot()
  })

  it('it should return the entire array as the third parameter', () => {
    const results = map([1, 2], (a, b, arr) => arr)

    expect(results).toMatchSnapshot()
  })
})
