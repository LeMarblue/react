
class Person {
  constructor (firstName, lastName, gender, birthDate) {
    this.firstName = firstName
    this.lastName = lastName
    this.gender = gender
    this.birthDate = birthDate
  }

  getAge () {
    let dateNow = Date.now()
    let birthDate = new Date(this.birthDate)
    let age = dateNow - birthDate
    return age
  }
}

class Student extends Person {
  constructor (school, classes, schoolId) {
    this.school = school
    this.classes = classes
    this.schoolId = schoolId
  }
}