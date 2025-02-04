function hundred () {
    let input;
    for (let i=0; i<10; i++){
        input = prompt('введите число больще 100');
        if (input === null) {
            console.log('отменили ввод');
            return;
        }
        if (input>100) {
            console.log(`число больше ста : ${input}`)
            return;
        }
    }
    console.log(`последние число  ${input}`)
}
hundred();