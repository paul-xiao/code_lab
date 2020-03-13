const {types} = require('mime-types')

Object.entries(types).forEach((key,val) => {
  let a  = ['video/mp4', 'video/webm', 'video/ogg']
 if(a.includes(key[1])){
   console.log(key[0])
 }
})