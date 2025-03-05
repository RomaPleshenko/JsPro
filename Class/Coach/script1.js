class Coach {
    constructor(name, specialization, rating) {
        this.name = name;
        this.specialization = specialization;
        this.rating = rating;
    }

    displayInfo() {
        console.log(`Тренер: ${this.name}, Спеціалізація: ${this.specialization}, Рейтинг: ${this.rating}`);
    }

}