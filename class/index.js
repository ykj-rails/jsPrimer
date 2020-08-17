class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  sayName() {
    console.log(`私は${this.name}です。`)
  }

  sayAge() {
    console.log(`私は${this.age}です`)
  }
}

const yukiji = new Human('ゆきじ', 31)

yukiji.sayName()
yukiji.sayAge()
