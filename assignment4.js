//JavaScript Destructuring Assignment

// Sample array
const fruits = ["Apple", "Banana", "Cherry"];

// Sample object
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com"
};

//**Array Destructuring**:
let fruit1,fruit2,fruit3;
[fruit1,fruit2,fruit3] = fruits;

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//**Object Destructuring**:


//**Object Destructuring**:
const{firstName,lastName,email} = user;

console.log(firstName);
console.log(lastName);
console.log(email);

//**Nested Object Destructuring**:

const user_mod = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    street:"BTM Layout",
    city:"Banglore"
};

const{street,city} = user_mod;

console.log(street);
console.log(city);

//**Destructuring in Function Parameters**:
function getUserDetails(user)   
{
    //let obj = this.user;
    let {firstName,email} = user;
    return firstName +" "+email;   
}

console.log(getUserDetails(user_mod));