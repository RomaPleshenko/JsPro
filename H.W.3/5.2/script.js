const exchange = 26;
for (let dollar =10; dollar <= 100; dollar +=10 ){
    let hryvnia = dollar*exchange
    console.log(`${dollar}=${hryvnia}`)
}