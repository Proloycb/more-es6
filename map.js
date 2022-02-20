const numbers = [4, 6, 8, 9];
const output = [];

const doubleIt = number => number * 2 ;

for (const number of numbers){
    const result = doubleIt(number) ;
    output.push(result);
}
// console.log(output);

// 1. loop 
// 2. element diye function call korsi
// 3. result ekta array er moddhe push korsi

// const output2 = numbers.map(doubleIt);
// const output2 = numbers.map(number => number * 2);
const output2 = numbers.map(x => x * 2);
// console.log(output2);

const square = numbers.map(x => x * x);
console.log(square);