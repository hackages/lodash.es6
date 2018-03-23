import {entries} from './03_entries'

describe('entries', () => {
  describe('should pair values', () => {
    it('in a function', () => {
      function Test() {
        this.a = 32
        this.b = 45
      }

      expect(entries(new Test())).toMatchSnapshot()
    })

    it('in an object', () => {
      const Test = {
        a: 32,
        b: 45,
      }
      expect(entries(Test)).toMatchSnapshot()
    })

    it('in a class', () => {
      class Test {
        a = 32
        b = 45
      }
      expect(entries(new Test())).toMatchSnapshot()
    })
  })
})
