function hundred () {
    let input;
    for (let i=0; i<10; i++){
        input = prompt('введите число больще 100');
        if (input === null) {
            console.log('отменили ввод');
           return;
        } 
         if (isNaN(input)) {
            console.log(`вы ввели строку ${input}`)
            break;
        } 
        if (input>100){
            console.log(`число больше ста : ${input}`)
            break;
        }
        
    }
    console.log("Последнее введённое значение:", input)
}
hundred();