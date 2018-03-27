class Foo {
  constructor(bar) {
    this.bar = bar
  }

  getBarValue() {
    return this.bar.getValue()
  }
}

module.exports = Foo
