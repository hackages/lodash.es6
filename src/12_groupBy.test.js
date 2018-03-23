import {groupBy} from './12_groupBy'

describe('groupBy', () => {
  it('should group', () => {
    expect(
      groupBy(
        [
          {sex: 'M', name: 'Robert'},
          {sex: 'M', name: 'Bob'},
          {sex: 'F', name: 'Louise'},
        ],
        e => e.sex
      )
    ).toMatchSnapshot()
  })
})
