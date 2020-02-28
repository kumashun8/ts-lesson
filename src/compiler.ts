function echo(message: string): string | null {
  return message;
}
let implicitAny;
implicitAny = 'implicitAny';

let nullableMesssage: string | null = echo('hi');
let undefinedMesssage: string | undefined = undefined;
let onlyNull: null = null;
let onlyUndefined: undefined = undefined;
if (nullableMesssage) {
  nullableMesssage.toUpperCase();
}
const newFunction = echo.bind(null, 'hi');
