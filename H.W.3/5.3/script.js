let N = prompt('ВВедите число ');
if (isNaN(N) || N<1){
    console.log("ВВедите число")
} else {
    for (let i = 1; i<=100; i++){
        if (i*i>N){
            break;
        }
        console.log(i);
    }
}

