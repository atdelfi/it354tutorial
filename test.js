function Person(name, city, prof){
    this.name = name;
    this.city = city;
    this.prof = prof;
}

var bruce = new Person("Bruce Wayne", "Gotham", "Batman" );
var clark = new Person("Clark Kent", "Metropolis", "Superman" );


Person.prototype.intro = function(){
    console.log('I am ' + this.prof +' and i protect ' + this.city)
}

console.log(bruce.intro());
console.log(clark.intro());
