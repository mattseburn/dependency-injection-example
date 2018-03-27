const Foo = require('../Foo')

const mockBar = {
  getValue: jest.fn()
}

const foo = new Foo(mockBar)

describe('Foo.doStuff()', () => {
  it('should return the message from bar', () => {
    const mockValue = 'Mock instance of Bar'
    mockBar.getValue.mockReturnValue(mockValue)

    expect(foo.getBarValue()).toBe(mockValue)
  })
})