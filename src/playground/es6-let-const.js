//function scoped
var nameVar = 'a';
var nameVar = 'b';
console.log('nameVar', nameVar);


//block scoped 
let nameLet = 'x';
nameLet = 'y';
console.log('nameLet', nameLet);

const nameConst = 'z';
console.log('nameConst', nameConst);