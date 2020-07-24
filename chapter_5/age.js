let readlineSync = require('readline-sync');
let age = readlineSync.question('How old are you? ');
age = parseInt(age);
console.log(`You are ${age} years old.`);
for(let int = 10; int <= 40; int += 10) {
  console.log(`In ${future} years, you will be ${age + future} years old.`);
}
