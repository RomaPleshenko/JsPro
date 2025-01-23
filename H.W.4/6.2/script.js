function average (arr) {
    let numbers=arr.filter(item => typeof item ==='number')
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum/numbers.length;
}
const array = [1,2,{},true,34];
let result = average(array);
console.log(result);