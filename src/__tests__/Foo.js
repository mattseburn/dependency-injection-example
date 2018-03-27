const Foo = require('../Foo')

const mockBar = {
  getValue: jest.fn()
}

const foo = new Foo(mockBar)

describe('Foo.getBarValue()', () => {
  it('should return the value from bar', () => {
    const mockValue = 'Mock instance of Bar'
    mockBar.getValue.mockReturnValue(mockValue)

    expect(foo.getBarValue()).toBe(mockValue)
  })
})
