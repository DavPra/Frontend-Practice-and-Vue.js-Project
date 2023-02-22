let firstName 
firstName = document.getElementById(firstName)

let lastName
lastName = document.getElementById(lastName)

let birthYear
birthYear = document.getElementById(birthYear)

let listBody

const Personen = [];


class Person {
    constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName 
    this.birthYear = birthYear
    }

}


function addPerson (firstName, lastName, birthYear) {
    return firstName + lastName + birthYear
}

if(addPerson) {
    addPerson.addEventListener('click', function() {
    Personen.push(Person);
    })
}

/* function age() {
        let date = new Date();
        return date.getFullYear() - this.birthYear;
    }

*/



