const user ={

    name :"tanishq",
    age: 22,
    location: "indore" ,
    email :" tanishq@gmail.com",
}

//console.log(user);

user.age = 24
//Object.freeze(user)
//console.log(user);

user.greet = function () {
    console.log("hello every one");
    
}

user.greet2 = function () {
    console.log('hello every one , ${this.name}');
    
}

console.log(user.greet());
console.log(user.greet2());
