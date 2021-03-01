console.log('Hello TypeScript')

let num1 = 50
let num2 = 10

const addNumbers = (number1: number , number2: number) => {
    return number1 + number2
}

console.log(addNumbers(num1, num2))

type dogType = {
    name: string,
    age: number | undefined,
    good: true,
    desc?: {
        breed: string,
        color: string,
    }
}

let dog: dogType = {
    name: 'Admiral',
    age: undefined,
    good: true,
    // desc: {
    //     breed: 'Australian Shepherd',
    //     color: 'Red Merle'
    // }
}

if (dog.desc) {
    dog.desc.breed = 'Labrador'
}

console.log(dog)