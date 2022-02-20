// declare variable based on the name of object property
const myObject = {x: 2, y: 4, z: 6, b: 50};
const {x, b} = myObject;
// console.log(x);

// destructuring array
const [p, q] = [45, 34, 47, 54];
// console.log(p, q);

const [faltu, altu] = ['momotaz', 'poroshi'];
// console.log(faltu);

const {sky, outdoor} = {sky: 'blue', rainbow: 7, outdoor: 'aho'};
// console.log(sky, outdoor);

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

console.log(company.web.tech.second);
console.log(company?.backend?.tech.third);