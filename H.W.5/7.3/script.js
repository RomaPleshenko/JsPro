function hundred () {
    for (let i=0; i<10; i++){
        let input = prompt('введите число больще 100');
        if (input>100){
            console.log(input);
            break;
        }
    }
}
hundred();