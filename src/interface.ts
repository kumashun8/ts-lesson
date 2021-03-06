// type addFunc = (num1: number, num2: number) => number;
interface addFunc {
  (num1: number, num2: number): number;
}
let addFunc: addFunc;
addFunc = (n1: number, n2: number) => n1 + n2;

interface Nameable {
  name?: string;
  nickName?: string;
}
const nameable: Nameable = {
  name: 'Quill',
  nickName: 'Quilla',
};
interface Human extends Nameable {
  age: number;
  greeting(message: string): void;
}
class Developer implements Human {
  constructor(
    public age: number,
    public experience: number,
    public name?: string
  ) {}
  greeting(message: string = 'Hello') {
    console.log(message);
  }
}
const tmpDeveloper = {
  name: 'Quill',
  age: 38,
  experience: 3,
  greeting(message: string) {
    console.log(message);
  },
};
const user: Human = new Developer(38, 3, 'Quill');
if (user.name) {
  console.log(user.name);
}
