
//5! = 5 * 4!
//n! = n * (n-1)!

//RECURSIVIDADE --

function fatorial(n){
    if(n==1){
        return 1
    }else{
        return n* fatorial(n-1)
    }
}
console.log(fatorial(5))