let addPerson = document.getElementById(addPerson);
let sortByLastName = document.getElementById(sortByLastName);
let sortByAge = document.getElementById(sortByAge);
let removeLast = document.getElementById(removeLast);
let removeAll = document.getElementById(removeAll);


class Person {
    constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName 
    this.birthYear = birthYear
    }

}


age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }

const Personen = [];


