"use strict";
function echo(message) {
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMesssage = echo('hi');
let undefinedMesssage = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
if (nullableMesssage) {
    nullableMesssage.toUpperCase();
}
const newFunction = echo.bind(null, 'hi');
