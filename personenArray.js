let addPerson = document.getElementById(addPerson);
let sortByLastName = document.getElementById(sortByLastName);
let sortByAge = document.getElementById(sortByAge);
let removeLast = document.getElementById(removeLast);
let removeAll = document.getElementById(removeAll);

const Personen = [];

class Person {
    constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName 
    this.birthYear = birthYear
    }

}

if(addPerson) {
    addPerson.addEventListener('click', function() {
        Personen.push(Person);
    })
}

age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }




