interface human{
    name:string,
    age:number,
    gender:string
}

const person={
    name:"divertome",
    age:26,
    gender:"male"
}
const sayHi=(person:human):string=>{
    return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`
};

console.log(sayHi(person));