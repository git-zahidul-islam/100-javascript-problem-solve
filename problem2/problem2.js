function sum(params1,params2){
    return params1 + params2;
}
console.log(sum(4,5));
function totalSum(...params){
    let total = 0;
    params.forEach(perElem => {
        total += perElem
    })
    return total;
}

console.log(totalSum(1,2,4,5,6,222));
// solved
console.log(performance.now());