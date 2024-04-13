
/*
let user={
    id:'jamsuham',
    pw:'1234',
    name:'잠수함',
    age:30,
};

let {id,pw,name,age}=user;
*/
/*
let {id,pw,name,age}={id:'jamsuham', pw:'1234',name:'잠수함',age:30}

*/
/*
let user={
    
    name:'잠수함',
    age:30,
}
let {id='guest',pw='1234',name,age}=user;

*/

let user={
    id:'jamsuham',
    pw:'1234',
    name:'잠수함',
    age:30,
};

let {id, ...rest}=user;


console.log(id);
console.log(rest.pw);
console.log(rest.name);
console.log(rest.age);

//프로미스 부터
