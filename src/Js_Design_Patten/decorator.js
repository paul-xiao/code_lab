const foo = (fn) => {
  return function() {
    const a  = Object.values(arguments).map(a => a + 'xxx')
    return fn.apply(this, a)
  }
}

const poo = foo(console.log)



poo(111,2,3)
