//1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md


class movie{
    constructor(title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating
    }
}
function PG(movie){
    return movie.filter((ele)=>ele.rating==="PG");
}
var movies=new movie("Casino Royale", "Eon Productions","PG13");
console.log(movies);

//2. https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

class Circle {
  constructor(radius = 1.0, color = "red") {
    this._radius = radius;
    this._color = color;
  }

  getRadius() {
    return this._radius;
  }

  setRadius(radius) {
    this._radius = radius;
  }

  getColor() {
    return this._color;
  }

  setColor(color) {
    this._color = color;
  }

 

//3.Write a “person” class to hold all the details.

class Person {
  constructor(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(firstName) {
    this.firstName = firstName;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(lastName) {
    this.lastName = lastName;
  }

  get age() {
    return this.age;
  }

  set age(age) {
    this.age = age;
  }

  get email() {
    return this.email;
  }

  set email(email) {
    this.email = email;
  }

  get address() {
    return this.address;
  }

  set address(address) {
    this.address = address;
  }

  toString() {
    return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email}, address: ${this.address})`;
  }
}

