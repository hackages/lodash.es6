import {findKey} from './05_findKey'

describe('findKey', () => {
  const users = {
    barney: {age: 36, active: true},
    fred: {age: 40, active: false},
    pebbles: {age: 1, active: true},
  }

  it('should work with functions', () => {
    expect(
      findKey(users, function(o) {
        return o.age < 40
      })
    ).toMatchSnapshot()
  })

  it('should work with objects', () => {
    expect(findKey(users, {age: 1, active: true})).toMatchSnapshot()
  })
})
