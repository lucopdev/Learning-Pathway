var valores = [8,1,7,4,2,9];

// console.log(valores.indexOf(8));
var pos = valores.indexOf(8);
var val = valores[pos];
//console.log(pos);

if(pos == -1){
    console.log('O valor não foi enontrado');
}else{
    console.log(`O valor ${val} está na posição ${pos}`);
}

