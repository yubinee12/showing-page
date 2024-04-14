/*
let id="jamsu";
let pw="1111";



let user={
    id:id,
    pw:pw,
}


let user={
    id,
    pw,
}

console.log(user.id);
console.log(user.pw);

*/


let user={
    id:"jamsu",
    pw:"1111",
    name:"Ich",
    mobile:"010-4477-XXXX",
    country:"대한민국"
}

for(let info in user){
    console.log(`${info}: ${user[info]}`);
}
