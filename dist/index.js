class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "20329032032", "", "Hello", 123456);
let blockchain = [genesisBlock];
console.log(blockchain);
// const lynn=new Human_class("lynn",26,"female")
// const person={
//     name:"divertome",
//     age:26,
//     gender:"male"
// }
// const sayHi=(person:Human_class):string=>{
//     return `Hello ${person.name}, you are ${person.age}, you are ${person.gender}!`
// };
// console.log(sayHi(person));
// console.log(sayHi(lynn));
//# sourceMappingURL=index.js.map