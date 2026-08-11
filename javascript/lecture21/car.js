function Car(name,brand,year){
    this.name = name;
    this.brand= brand;
    this.year = year;
}
Car.prototype.start = function(){
    console.log("car started")
}

Car.prototype.stop = function(){
    console.log('Car stopped');
}

function RacingCar(name,brand,year){
    Car.call(this,name,brand,year);

}
RacingCar.prototype.nitrogen = function(){
    console.log("Nitrogen car")
}

function SedanCar(name,brand,year){
    Car.call(this,name,brand,year);

}
SedanCar.prototype.luxury = function(){
    console.log("luxury car")
}
const c = new Car("bmw","34A",2022)
console.log(c);
c.start();
c.stop();
const r  = new RacingCar("oooo","37A",2023);
console.log(r);
const s = new SedanCar("sfe","67w",2024);
console.log(s);