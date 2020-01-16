class Student {
  constructor(student){
    const {name, age, sex} = student
    this.name = name
    this.age = age
    this.sex = sex
  }
}


const paul = new Student({
  name: 'paul',
  age: '10',
  sex: 'man'
})

console.log(paul)