// var names = ['Nemanja', 'Koja', 'Nikola'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Nemanja'));
//
// var person = {
//   name: 'Nemanja',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// }
//
//
// person.greet();


// Challange Area
function add (a, b) {
  return a + b;
}

// addStatement
var addStatement = (a, b) => {
  return a + b;
}

// addExpression
var addExpression = (a, b) => a + b;


console.log(addExpression(1,3));
console.log(addExpression(9,0));
