const obj = {
  name: 'paul'
}

console.log(obj.name)


const Obj = {};
let name = '';
Object.defineProperty(Obj,'name',{
    set:function(value) {
        name = value;
        console.log('name set as:'+value);
    },
    get:function() {
        console.log('get method called');
        return '<'+name+'>';
    }
});
Obj.name = 'test';
console.log(Obj.name);