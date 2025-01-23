function sumFunction() {
    let sum = 0;
    return function solution(num) {
        sum+=num;
        return sum;
    }
}
const summ = sumFunction();
console.log(summ(4));
console.log(summ(6));
console.log(summ(6));


