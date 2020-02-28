let hasValue: boolean = true;
let count: number = 10;
let float: number = 3.14;
let negative: number = -1.11;
let single: string = '';
let double: string = '';
let back: string = ``;

const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
};

const fruits = ['Apple', 'Banana', 'Grape', 1];
const fruit = fruits[0];

const book: [string, number, boolean] = ['business', 1500, false];

enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

let anything: any = true;
anything = ['hoge', 1, 2];
anything = {};
anything.name = 'taro';
let banana: string = 'banana';
banana = anything;

let unionTypes: (number | string)[] = [10, 'hoge'];

type ClothSize = 'small' | 'medium' | 'large';
const apple = 'apple';
let clothSize: ClothSize = 'small';
const cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'white',
  size: 'small',
};
cloth.size = 'large';

function add(num1: number, num2: number) {
  return num1 + num2;
}

function sayHello(): void {
  console.log('hello');
  return;
}
console.log(sayHello());
let tmp: undefined;

const anotherAdd = add;
anotherAdd(2, 3);

// const functionName: (arg: argType) => returnType = arg => func(arg)
const doubleNumber: (num: number) => number = num => num * 2;
