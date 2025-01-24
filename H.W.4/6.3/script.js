function removeElement (array, item ) {
    let newArr = array.filter(remEl=> remEl!==item);
    return newArr;
}
const array = [1,2,4,4,3,5,7,88,4]
console.log(removeElement(array,4));