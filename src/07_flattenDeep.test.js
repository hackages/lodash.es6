import {flattenDeep} from './07_flattenDeep'

describe('flattenDeep', () => {
  it('should flatten recursively', () => {
    expect(
      flattenDeep([1, 2, false, {a: 32}, NaN, null, undefined])
    ).toMatchSnapshot()

    expect(
      flattenDeep([[1, 2], [[false, {a: 32}], NaN], [null, [{undefined}]]])
    ).toMatchSnapshot()

    expect(flattenDeep([[[[[[[[[[[[['Sorry']]]]]]]]]]]]])).toMatchSnapshot()
  })
})
