/*
*
* Map
*
*/

const map = new Map()

map.set('a', '1')
// map.get('a')
// map.delete('a')
map.has('a')
console.log(map)


/*
*
* Map to Array
*
*/

console.log([...map.values()])