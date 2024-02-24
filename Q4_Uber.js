class Uber {
    constructor(destinationDistance, amount, typeOfCar) {
        this.destinationDistance = destinationDistance;
        this.amount = amount;
        this.typeOfCar = typeOfCar;
    }   
    calculateFare() {
        // Fare = base fare + distance * rate per kilometer
        const baseFare = 50; // Example base fare
        const ratePerKilometer = 10; // Example rate per kilometer
        return baseFare + this.destinationDistance * ratePerKilometer;
    }
}
const myUberRide = new Uber(10, 0, 'Audi');
console.log(`Estimated fare: $${myUberRide.calculateFare()}`);
