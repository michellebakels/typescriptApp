"use strict";
console.log('Hello TypeScript');
var num1 = 50;
var num2 = 10;
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(num1, num2));
var dog = {
    name: 'Admiral',
    age: undefined,
    good: true,
    // desc: {
    //     breed: 'Australian Shepherd',
    //     color: 'Red Merle'
    // }
};
if (dog.desc) {
    dog.desc.breed = 'Labrador';
}
console.log(dog);
