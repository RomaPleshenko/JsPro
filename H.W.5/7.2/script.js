function curr (a){
    return function (b){
        return  a*b;
    }
}
console.log(curr(2)(5));