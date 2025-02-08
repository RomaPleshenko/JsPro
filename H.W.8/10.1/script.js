const user = {
    name: "John",
    age: 45,
    city: 'London',
    email: 'johnemai@gmail.com',
    phoneNumber: '+4498675432',
     information() {
        console.log(`Тебя зовут ${this.name}, твой возраст ${this.age}, ты живешь в ${this.city}, твоя почта${this.email},твой номер телефона ${this.phoneNumber}`)
     }
}
user.information();