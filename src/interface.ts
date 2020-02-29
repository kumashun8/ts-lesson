interface Human {
  name: string;
  age: number;
  greeting(message: string): void;
}
class Developer implements Human {
  constructor(public name: string, public age: number) {}
  greeting(message: string) {
    console.log('Hello!');
  }
}

const human = {
  name: 'Quill',
  age: 38,
  greeting(message: string) {
    console.log(message);
  },
};
