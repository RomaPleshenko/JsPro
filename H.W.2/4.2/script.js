let num = prompt('Введи трьохзначное число:');
if (num.length !=3){
    alert('число не трьохзначное ')
} else {
    let digit1 = num[0];
    let digit2 = num[1];
    let digit3 = num[2];
    if (digit1===digit2 && digit1===digit3 && digit2===digit3) {
        alert('все цифры одинаковые')
    } else if (digit1===digit2 || digit1===digit3 || digit2===digit3){
        alert('две цифры одинаковые')
    } else {
        alert('все цифры разные')
    }
}