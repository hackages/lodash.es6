import {compact} from './08_compact'

describe('compact', () => {
  it('should compact', () => {
    expect(
      compact([
        1,
        2,
        false,
        {a: 32},
        NaN,
        null,
        undefined,
        false,
        null,
        0,
        '',
        undefined,
      ])
    ).toMatchSnapshot()
  })
})
