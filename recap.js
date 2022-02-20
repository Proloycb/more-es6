const hubby = 'Priyanka';
let phone = 'Tecno Spark Go';
phone = 'Iphone';

function maxNumber (array = []){
    const max = Math.max (...array);
    return max;
}
const result = maxNumber();
console.log(result);

const myNotes = `I am mojnu of ${hubby}. I have a ${phone}`;
console.log(myNotes);

const square = x => x * x ;
console.log(square(35));