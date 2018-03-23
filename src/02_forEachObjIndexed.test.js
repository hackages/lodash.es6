import {forEachObjIndexed} from './02_forEachObjIndexed'

describe('forEachObjIndexed', () => {
  it('should map values of an object', () => {
    const result = []
    const results2 = []
    let name = ''
    let count = 0

    forEachObjIndexed({a: 33}, (a, b) => result.push([a, b]))

    forEachObjIndexed({a: undefined, b: null, c: true}, (a, b) =>
      results2.push([a, b])
    )

    forEachObjIndexed(
      {4: 42, 35: 35},
      (a, b) => (count += parseInt(a) + parseInt(b))
    )

    forEachObjIndexed({name: 'Antonio'}, (a, b) => (name = `My ${b} is ${a}`))

    expect(result).toMatchSnapshot()
    expect(results2).toMatchSnapshot()
    expect(count).toMatchSnapshot()
    expect(name).toMatchSnapshot()
  })
})
