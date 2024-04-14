/*
let dic=new Object();

dic.boy="소년";
dic.girl="소녀";
dic.friend="친구";

console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);
//////////////////////////////////////

let dic={
    boy:"소년",
    girl:"소녀",
    friend:"친구"
};

delete dic.girl;
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);


dic.apple='사과';
dic.ten=10;
console.log(dic.apple);
console.log(dic.ten);

//////////////////////////////////////
let dic={
    present:"현재",
};

console.log(dic.present);
dic.present="선물";
console.log(dic.present);


///////////////////////////////////////
const dic={
    present:"현재",
};

dic={};

console.log(dic.present);
dic.present="선물";
console.log(dic.present);
*/

const unit={
    attack:function(weapon){
        return`${weapon}으로 공격한다`;
    }
}

console.log(unit.attack("주먹"));
console.log(unit.attack("총"));


/*
attack(weapon) 
    return `${weapon}으로 공격한다.`;
*/

