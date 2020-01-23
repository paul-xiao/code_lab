/*
* function.call(thisArg, arg1, arg2, ...)
* func.apply(thisArg, [argsArray]) 
*/ 


function a() {
  // const args = Array.from(arguments)
  // const args = [...arguments]
  // const args = [].slice.call(arguments)
  // const first = [].shift.call(arguments)
  const args = [...arguments]
 console.log(args)
}

// a.call(this, 1,2,3)

a.apply(null, [1,2,3,4])