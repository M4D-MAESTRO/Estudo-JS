function MeuOBJ(){

}

console.log(MeuOBJ.prototype)

const obj1 = new MeuOBJ;
const obj2 = new MeuOBJ;

console.log(obj1.__proto__ === obj2.__proto__);
console.log(MeuOBJ.prototype === obj1.__proto__);

MeuOBJ.prototype.nome = 'Anônimo';
MeuOBJ.prototype.falar = function() {
    console.log(`Meu nome é: ${this.nome}`);
}
obj1.falar();

obj2.nome = 'Rafael';
obj2.falar();

const obj3 = {}
obj3.__proto__ = MeuOBJ.prototype
obj3.nome = 'Obj3';
obj3.falar();

