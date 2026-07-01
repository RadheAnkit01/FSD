function Animal(name){
    this.name = name
}
Animal.prototype.walk = function(){
    console.log(this.name + " walking...")
}

function Dog(name,breed){
    Animal.call(this,name);
    this.breed = breed;
}
// Dog.prototype = Object.create(Animal.prototype);
Dog.prototype = Animal.prototype;

Dog.prototype.constructor = Dog;
// console.log(Dog.prototype.constructor)
Dog.prototype.bark = function (){
    console.log(this.breed, this.name , "Barking...")
}

let d = new Dog("Gullu", "German")
// console.log(d.name)
// console.log(d.breed)
// d.walk()
// d.bark()

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1)) + min;
}
console.log(getRandom(1,6))
// console.log(Math.floor(Math.random()*11))