"use strict";
let addFunc;
addFunc = (n1, n2) => n1 + n2;
const nameable = {
    name: 'Quill',
    nickName: 'Quilla',
};
class Developer {
    constructor(age, experience, name) {
        this.age = age;
        this.experience = experience;
        this.name = name;
    }
    greeting(message = 'Hello') {
        console.log(message);
    }
}
const tmpDeveloper = {
    name: 'Quill',
    age: 38,
    experience: 3,
    greeting(message) {
        console.log(message);
    },
};
const user = new Developer(38, 3, 'Quill');
if (user.name) {
    console.log(user.name);
}
