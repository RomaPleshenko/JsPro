let number = prompt('Введите целое число');
if (isNaN(number )){
    console.log("введите целое число")
} else if(number<=1) { 
    console.log("Число не простое")
} else {
    let num = true;
    for(let i = 2; i<=Math.sqrt(number);i++){
        if (number % i === 0) {
            num=false;
            break;
        }
    
    }
    if (num) {
        console.log(`${number} это простое число`);
    } else {
        console.log(`${number} это не простое число`);
    }
}