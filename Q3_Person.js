class Person {
    constructor(height, weight, maritalStatus) {
        this.height = height;
        this.weight = weight;
        this.maritalStatus = maritalStatus;
    } 
    calculateBMI() {
        const heightInMeters = this.height / 100; // Convert height to meters
        return this.weight / (heightInMeters * heightInMeters);
    }
}

const navin = new Person(176, 89, 'Single');
console.log(`navin's BMI: ${navin.calculateBMI().toFixed(2)}`);
console.log(`Marital Status: ${navin.maritalStatus}`);
