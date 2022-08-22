/*
    Exam 1
*/
// Create a null object and set its variable name as user;
var user = null;
// Add a name attribute and set its value as John;
user = new Object();
user.name = "John";
// Add a surname attribute and set its value as Mike;
user.surname = "Mike";
// Modify the value of name attribute as Peter;
console.log(user)
user.name = "Peter";
console.log(user);
// Delete name attribute of user.
delete user.name;
console.log(user);

/*
    Exam 2
*/

var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
};
var sum = 0;
for (let item in fruit) {
    sum += fruit[item];
}
console.log(sum);