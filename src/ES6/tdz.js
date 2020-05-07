// 变量提升: 即变量可以在声明之前使用，值为undefined

// “暂时性死区”（temporal dead zone，简称 TDZ）: 在代码块内，使用let命令声明变量之前，该变量都是不可用的。

a = '111'  // ReferenceError: Cannot access 'a' before initialization
console.log(a) // ReferenceError: Cannot access 'a' before initialization
let a
a = '222'
console.log(a)

