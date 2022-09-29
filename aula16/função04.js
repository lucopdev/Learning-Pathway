//fatorial 5! = 5x4x3x2x1

function fatorial(n){
    let fat = 1
    for(let c=n; c>1; c--){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))