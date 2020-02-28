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
console.log(coffee.size);

let anything: any = true;
anything = ['hoge', 1, 2];
anything = {};
anything.name = 'taro';
let banana: string = 'banana';
banana = anything;

let unionTypes: (number | string)[] = [10, 'hoge'];

const apple = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'small';
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: clothSize,
};
cloth.size = 'large';
