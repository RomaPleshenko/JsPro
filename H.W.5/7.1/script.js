function sumFunction() {
    let sum = 0;
    return function solution(num) {
        sum+=num;
        return sum;
    }
}
const summary = sumFunction();
console.log(summary(4)); 

console.log(summary(6)); 

console.log(summary(10)); 

console.log(summary(7)); 


