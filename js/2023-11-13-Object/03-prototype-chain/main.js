const product = {
  id: 3,
  title: "test",
};

console.log(product);

//product (id, title ) -> prototype ( toString... ) -> null

console.log(product.__proto__.__proto__);

const firstProto = Object.getPrototypeOf(product);

const lastProto = Object.getPrototypeOf(firstProto);

console.log(firstProto, lastProto);

console.log([1, 2, 3]);

const myArr1 = [1, 2, 3];

console.log(myArr1.__proto__.__proto__.__proto__);

const myDate = new Date();

console.log(myDate.__proto__);

console.log(myDate.__proto__.__proto__);

console.log(myDate.__proto__.__proto__.__proto__);

function User(id, name) {
  this.id = id;
  this.name = name;
}

User.prototype.greet = function () {
  console.log("Merhaba", this.name);
};

const user1 = new User(12, "Burak");
const user2 = new User(16, "Bura");
user1.greet();

console.log(user2.__proto__.__proto__.__proto__);

function Hero(name, power) {
  this.name = name;
  this.power = power;
}

Hero.prototype.greet = function () {};

Hero.prototype.fire = function () {
  console.log(`${this.name} ateş ediyor...`);
};

Hero.prototype.jump = function () {
  console.log(`${this.name} zıplıyor...`);
};

const mySuperHero = new Hero("Batman");

mySuperHero.fire();

console.log(mySuperHero.__proto__.__proto__.__proto__);

mySuperHero.walk();
mySuperHero.jump();
mySuperHero.fire();
mySuperHero.toString();
