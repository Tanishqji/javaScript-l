const facebookuser = { }

facebookuser.id=  "123abc"
facebookuser.name = "tanishq"
facebookuser.isloggedin = "true"

//console.log(facebookuser);

const user02 ={
    email :"abc@gmail.com",
    fullname:{
        username:{
              firstname:"tanishq",
              lastname:"sejwar"
        }
    }
}

//console.log(user02.fullname.username);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

const obj3 = Object.assign({},obj1 ,obj2)
console.log(obj3);
