function User(name) {
    this.name = name;
}

User.prototype = {};

let user = new User('hi');
let user2 = new user.constructor('wow');

// console.log(user.name);
// console.log(user2.name);
// console.log(user2);

class AA {
    constructor (name) {
        this.name = name
    }

    changeName () {
        this.name = 'hi'
    }
}

class BB extends AA {
    static from (){
        //...
    }

    constructor () {
        super();
    }

    changeName () {
      BB.from(); 
    }
}

BB.from();


const bb = new BB();
bb.changeName();
console.log(bb.name);
