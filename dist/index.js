"use strict";
let hasValue = true;
let count = 11;
let float = 3.14;
let negative = -1.11;
let single = '';
let double = '';
let back = ``;
const person = {
    name: {
        first: 'Jack',
        last: 'Smith',
    },
    age: 21,
};
const fruits = ['Apple', 'Banana', 'Grape', 1];
const fruit = fruits[0];
const book = ['business', 1500, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
let anything = true;
anything = ['hoge', 1, 2];
anything = {};
anything.name = 'taro';
let banana = 'banana';
banana = anything;
let unionTypes = [10, 'hoge'];
const apple = 'apple';
let clothSize = 'small';
const cloth = {
    color: 'white',
    size: 'small',
};
cloth.size = 'large';
function add(num1, num2) {
    return num1 + num2;
}
function sayHello() {
    //console.log('hello');
    return;
}
let tmp;
const anotherAdd = add;
anotherAdd(2, 3);
// const functionName: (arg: argType) => returnType = arg => func(arg)
const doubleNumber = num => num * 2;
function doubleAndHandle(num, cb) {
    const doubleNumber = cb(num * 2);
    //console.log(doubleNumber);
}
doubleAndHandle(21, doubleNumber => {
    return doubleNumber;
});
let unknownInput;
let anyInput;
let text;
unknownInput = 'hello';
text = anyInput;
if (typeof unknownInput === 'string') {
    text = unknownInput;
}
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error.'));
