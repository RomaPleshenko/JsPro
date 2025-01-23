const word = prompt("Введите слово")
const letters = prompt("Ведите буквы которые хотите удалить") 
function deleteLetters (word, letters) {
   let result = '';
   letters.split();
   for (let char of word) {
    if (!letters.includes(char)) {
        result+=char;
    }
   }
   return result; 
}
const result = deleteLetters(word,letters)
alert(result);