import {flatten} from './06_flatten'

describe('flatten', () => {
  it('should flatten', () => {
    expect(
      flatten([1, 2, false, {a: 32}, NaN, null, undefined])
    ).toMatchSnapshot()

    expect(
      flatten([[1, 2], [[false, {a: 32}], NaN], [null, [{undefined}]]])
    ).toMatchSnapshot()

    expect(flatten([[[[[[[[[[[[['Sorry']]]]]]]]]]]]])).toMatchSnapshot()
  })
})
