
let date = prompt('Год рождения');
if (date === null) {
    alert("");
} else {
    let city = prompt('Где вы родились? ');
    if (city === null) {
        alert("Жалко что вы не захотели ввести свой город");
    } else {
        let likeSport = prompt('Ваш любимый спорт?');
        if (likeSportport === null) {
            alert("Жалко что вы не захотели ввести свой любимый спорт");
        } else {
            let currentYear= new Date().getFullYear();
let age =currentYear-date;
let cityMessage ='';
if (city){
    city = city.toLocaleLowerCase();
    switch (city){
        case "киев" :
            cityMessage= "Ты живешь в столице Украины";
            break;
        case "вашингтон" :
            cityMessage= "Ты живешь в столице США";
            break;
        case "лондон" :
            cityMessage= "Ты живешь в столице Великобритании";
            break;
        default:
            cityMessage= `Ты живешь в городе ${city}`

    }

}
let sportMassage ='';
if (likeSport){
    likeSport = likeSport.toLocaleLowerCase();
    switch (likeSport){
        case "футбол" :
            sportMassage= "Круто! Хочешь стать как Месси?!";
            break;
        case "баскетбол" :
            sportMassage= "Круто! Хочешь стать как Леброн?!";
            break;
        case "бокс" :
            sportMassage= "Круто! Хочешь стать как Александр Усик?!";
            break;
        default:
            sportMassage= ` ${likeSport} очень интересный вид спорта`

    }

}
alert(`Тебе ${age}\n${cityMessage}\n${sportMassage}`)
        }
    }
}


