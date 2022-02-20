class Support {
    name;
    disignation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address ;
    }
    starSession(){
        console.log('start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
console.log(salman);