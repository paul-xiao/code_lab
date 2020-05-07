const target = {
  name : 'paul',
  age: '10'
}

const handler =  {
  get: (target, key) => {

    return target[key]

  },
  set: (target, key, value) => {
    target[key] = value;
  }
}
let proxy = new Proxy(target, handler)

console.log(proxy.name)

proxy.sex = 'man'

console.log(proxy)




