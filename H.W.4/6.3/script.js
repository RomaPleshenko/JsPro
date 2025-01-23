function removeElemet (array,item) {
    let indX = array.indexOf(item);
    if (indX !== -1){
        array.splice(indX, 1);
    }
}
const array = [1,5,4,47,99,100,4,7];
removeElemet(array,4);
console.log(array);