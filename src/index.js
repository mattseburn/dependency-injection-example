const Foo = require('./Foo')
const Bar = require('./Bar')

const bar = new Bar()
const foo = new Foo(bar)

console.log(foo.getBarValue())
