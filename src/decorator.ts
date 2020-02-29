function Logging(message: string) {
  console.log('Logging Factory');
  return function(constructor: Function) {
    console.log(message);
    console.log(constructor);
  };
}
function Component(template: string, selector: string) {
  console.log('Component Factory');
  return function<T extends { new (...args: any[]): { name: string } }>(
    constructor: T
  ) {
    return class extends constructor {
      constructor(...args: any[]) {
        super(...args);
        console.log('Component');
        const mountedElement = document.querySelector(selector);
        const instance = new constructor();
        if (mountedElement) {
          mountedElement.innerHTML = template;
          mountedElement.querySelector('h1')!.textContent = instance.name;
        }
      }
    };
  };
}

function PropertyLogging(target: any, propertyKey: string) {
  console.log('PropertyLogging');
  console.log(target);
  console.log(propertyKey);
}

function MethodLogging(
  target: any,
  propertyKey: string,
  descripter: PropertyDescriptor
) {
  console.log('MethodLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descripter);
}
function enumerable(isEnumerable: boolean) {
  return function(
    _target: any,
    _propertyKey: string,
    _descripter: PropertyDescriptor
  ) {
    return {
      enumerable: isEnumerable,
    };
  };
}
function AccessLogging(
  target: any,
  propertyKey: string,
  descripter: PropertyDescriptor
) {
  console.log('AccessLogging');
  console.log(target);
  console.log(propertyKey);
  console.log(descripter);
}

@Logging('Logging User')
@Component('<h1>{{ name }}</h1>', '#app')
class User {
  @PropertyLogging
  // static name2 = 'Kite';
  name = 'Quill';
  constructor(public _age: number) {
    console.log('User was created!');
  }
  @AccessLogging
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  @enumerable(false)
  @MethodLogging
  greeting() {
    console.log('hello');
  }
}
const user1 = new User(32);
const user2 = new User(32);
const user3 = new User(32);
