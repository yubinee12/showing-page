/*

const [a,b,c]=['C#','javascript'];

console.log(a);
console.log(b);
console.log(c);



////////////////////////////
const[a,b,c='C언어']=['C#','javascript'];
console.log(a);
console.log(b);
console.log(c);

//////////////
const[a, , c,d]=['C#', 'javascript','python','react'];
console.log(a);
console.log(c);
console.log(d);

*/


const [a,b,...rest]=['C#','javascript','python','react','C++'];
console.log(a);
console.log(b);
console.log(rest.length);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest[2]);

const arr1=['C#','javascript'];
const arr2=['python','react','C++'];
const arr3=[...arr1, ...arr2];

console.log(arr3);
