const freinds = ['Tom Hanks', 'Tom Cruise', 'Tom Alan', 'Tom alash'];
const fLengths = freinds.map(freind => freind.length);
// console.log(fLengths);

const products = [
    {name: 'Phone', price: 10000, color: 'blackPurple'},
    {name: 'Water bottle', price: 100, color: 'yellow'},
    {name: 'Smart watch', price: 1000, color: 'black'},
    {name: 'Sticky note', price: 30, color: 'pink'},
    {name: 'Water glass', price: 10, color: 'white'}
];

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);
// products.map(product => console.log(product));
products.forEach(product => console.log(product));
// console.log(productPrices)