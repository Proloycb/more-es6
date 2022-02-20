const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '01717555555', address: 'Chandpur', dress: 'silver'};

// const name = fish.name;
// const id = fish.id;
// const price = fish.price;
// const address = fish.address;

const {phone, price, address} = fish ;

// console.log(phone, price);
// console.log(phone, address);
// console.log(phone);
// console.log(address);

const company = {
    name: 'GP', 
    ceo: { id: 23, name: 'ajmol', food: 'fuchka'},
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        } 
    }
}

const {name, food} = company.ceo ;
const {second, third} = company.web.tech ;

console.log(name, food);
console.log(second, third);