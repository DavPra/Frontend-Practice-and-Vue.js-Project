class Person {
    constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName 
    this.birthYear = birthYear
}

    age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }

