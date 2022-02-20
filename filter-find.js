const products = [
    {name: 'Phone', price: 10000, color: 'blackPurple'},
    {name: 'Water bottle', price: 100, color: 'yellow'},
    {name: 'Smart watch', price: 3000, color: 'black'},
    {name: 'watch', price: 1000, color: 'black'},
    {name: 'Sticky note', price: 30, color: 'pink'},
    {name: 'Water glass', price: 10, color: 'white'}
];

const bigPrices = products.filter(product => product.price > 100);
const blacks = products.filter(product => product.color == 'black');
const blue = products.filter(product => product.color == 'blue');
console.log(blue)

const pink = products.find(product => product.color == 'pink');
const green = products.find(product => product.color == 'green');
console.log(green);