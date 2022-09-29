let amigo = {
    nome:'Lucas',
    sexo:'Masculino',
    idade:37,
    peso:90,
    engordar(p){
        this.peso += p
    }
};
amigo.engordar(2);

console.log(`${amigo.sexo}`);