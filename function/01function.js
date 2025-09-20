function myName (){
    console.log("t");
    console.log("a");
    console.log("n");
    console.log("i");   
}
//myName()

function addnum (num1 , num2){
 return num1+num2
}
const result = addnum(4,4)
//console.log("result",result );


function loggeduser (username){
    if (username == undefined) {
        console.log("enter the username");
        return
        
    }
return '${username} logged in'
}
//console.log(loggeduser());

const user = {
    name: "tanishq",
    price: 99
}

function useuser(user) {
    console.log(`username is ${user.name} and price is ${user.price}`);
}

useuser(user);

