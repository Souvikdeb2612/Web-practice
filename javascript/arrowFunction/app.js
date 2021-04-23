const car = {
    name: "audi",
    price: 50000,
    startCar: function (){
        console.log(this);
        console.log(this.name);
    }
}

car.startCar();


const squareRoot= (num)=>Math.sqrt(num);

