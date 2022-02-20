class TeamMember {
    name;
    disignation = 'support web dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address ;
    }
}
class Support extends TeamMember {
    starSession(){
        console.log('start a support session');
    }
}

class SudentCare extends TeamMember{
    giveRoutine(){
        console.log('give a routine');
    }
}

class NeptuneApp extends TeamMember {
    codeEditor;
    constructor(name, address, editor){
        super(name, address);
        this.codeEditor = editor;
    }
    releaseVersion(version){
        console.log('start a support session', version);
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const alia = new SudentCare('Alia Bhatt', 'Dubai');

const alash = new NeptuneApp('alash', 'UK', 'visual studio');
alash.releaseVersion(1.456);
// console.log(alash);