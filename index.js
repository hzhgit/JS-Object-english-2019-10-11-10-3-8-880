// 1. Program and observe the following requirements:  

//   1- Create a null object and set its variable name as user; 
let user = {}
console.log(user)

//   2- Add a name attribute and set its value as John; 
user.name = 'John'
console.log("user.name=" + user.name);

//   3- Add a surname attribute and set its value as Mike; 
user.surname = 'Mike'
console.log("user.surname=" + user.surname + "/" + " user.name=" + user.name);

//   4- Modify the value of name attribute as Peter; 
user.name = 'Peter'
console.log("user.name=" + user.name);

//   5- Delete name attribute of user. 
delete user.name
console.log("user.name=" + user.name);




// 2. Program and observe the following requirements: calculate how many pieces of fruit there are in the fruit object and the output should be 50. 

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};

function calculate(obj) {
    var sum = 0;
    var keys = Object.keys(obj)
    for (let i = 0; i < keys.length; i++) {
        sum += obj[keys[i]]
    }
    return sum
}

console.log(calculate(fruit));
