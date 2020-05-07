/*
* function.call(thisArg, arg1, arg2, ...)
* func.apply(thisArg, [argsArray]) 
* 若第一个参数(thisArg)为 null，则函数内的 this 会指向默认的宿主对象（浏览器是 window）
*/ 


function a() {
  // const args = Array.from(arguments)
  // const args = [...arguments]
  // const args = [].slice.call(arguments)
  // const first = [].shift.call(arguments)
  const args = [...arguments]
  console.log(this)
 console.log(args)
}

 a.call(null, 1,2,3)  //

 // a.apply(null, [1,2,3,4])


 //bind 

// bind 的一个特性是 bind 之后不能再次更改 this，这里也实现了。
Function.prototype.bind = function (context) {
  var self = this
  return function () {
    return self.apply(context, arguments)
  }
}