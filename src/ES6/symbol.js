// undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）

let a = Symbol()
console.log(typeof a)



// Symbol 值作为对象属性名时，不能用点运算符。

const b = Symbol()
const c = {}