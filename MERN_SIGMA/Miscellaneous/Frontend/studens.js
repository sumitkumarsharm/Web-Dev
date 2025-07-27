// // Learning Oops in javascript

// const student = {
//     name: "John Doe",
//     age: 21,
//     email: "johndoe@example.com",
//     getMarks: function () {
//         return "Marks are confidential";
//     }
// }
// const student2 = {
//     name: "Jane Smith",
//     age: 22,
//     email: "janesmith@example.com",
//     getMarks: function () {
//         return "Marks are confidential";
//     }
// }
// // factory function
// function getStudentDetails(name, age, email) {
//     const person = {
//         name: name,
//         age: age,
//         email: email,
//         talk() {
//             console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);

//         }
//     }
//     return person;
// }

// const p1 = getStudentDetails("Alice Johnson", 20, "alicejohnson@example");
// const p2 = getStudentDetails("Bob Brown", 23, "bobbrown@example");
// console.log(p1);
// console.log(p2.talk());

// // new keyword
// // constructor function : it does not return anything, it creates a new object and returns it implicitly
// function Person(name, age, email) {
//     this.name = name;
//     this.age = age;
//     this.email = email;

// }
// Person.prototype.talk = function () {
//     return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
// };

// const p3 = new Person("John Doe", 21, "johndoe@example.com");
// const p4 = new Person("Jane Smith", 22, "janesmith@example.com");
// console.log(p3);
// console.log(p4.talk());

// classes keyword
// class Person2 {
//     constructor(name, age, email) {
//         this.name = name;
//         this.age = age;
//         this.email = email;
//     }

//     talk() {
//         return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }

// const p5 = new Person2("John Doe", 21, "johndoe@example.com");
// const p6 = new Person2("Jane Smith", 22, "janesmith@example.com");
// console.log(p5);
// console.log(p6.talk());


// inheritance


class Person2 {
    constructor(name, age, email) {
        console.log("Person2 constructor called");

        this.name = name;
        this.age = age;
        this.email = email;
    }

    talk() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

class Students extends Person2 {
    constructor(name, age, email, course) {
        console.log("Students constructor called");
        super(name, age, email); // call the parent constructor
        this.course = course;
    }

    getCourse() {
        return `I am enrolled in ${this.course}.`;
    }
}

class Teachers extends Person2 {
    constructor(name, age, email, subject) {
        super(name, age, email); // call the parent constructor
        this.subject = subject;
    }

    getSubject() {
        return `I teach ${this.subject}.`;
    }
}