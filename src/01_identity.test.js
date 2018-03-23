import {identity} from './01_identity'

describe('identity', () => {
  it('Should return the same value that has been passed', () => {
    expect(identity(1)).toMatchSnapshot()
    expect(identity({})).toMatchSnapshot()
    expect(identity('Hackages')).toMatchSnapshot()
    expect(identity(1, 2, 3)).toMatchSnapshot()
  })
})
