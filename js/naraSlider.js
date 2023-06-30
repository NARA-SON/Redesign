function Person(username, userage) {
  this.name = username
  this.age = userage
  this.intro = function () {
    alert("안녕하세요 "+this.name+"입니다")
  }
  this.introAge = function () { 
    alert(this.age+"살 입니다")
  }
}
 
let person1 = new Person("정현진",33)
let person2 = new Person("손나라", 28)
let person3 = new Person("손하늘", 32)

person2.intro()

// let person1 = {
//   name: "정현진",
//   age: 33,
//   intro: function () { 
//     alert("안녕하세요")
//   },
//   introAge: function () { 
//     alert(this.age+"살입니다")
//   }
// }
// person1.intro()
// person1.introAge()

// let person2 = {
//   name: "손나라",
//   age: 28,
//   intro: function () { 
//     alert("안녕하세요")
//   },
//   introAge: function () { 
//     alert(this.age+"살입니다")
//   }
// }
// person2.intro()
// person2.introAge()

// let person3 = {
//   name: "손하늘",
//   age: 32,
//   intro: function () { 
//     alert("안녕하세요")
//   }
// }
// person3.intro()