const contactBook = {
    contacts: [
        {
            name: 'John',
            phoneNumber: '+4478985463',
            email: 'john298@gmail.com'
        },
        {
            name: 'Anna',
            phoneNumber: '+380984776552',
            email: 'annacarenina1878@gmail.com'
        }
    ],
    findContact(name) {
        const found = this.contacts.filter(contact => contact.name.toLowerCase()===name.toLowerCase());
        return found;
    },
    addContact(name,phoneNumber,email) {
        this.contacts.push ({name,phoneNumber,email})
        console.log(`Контакт ${name} добавлен!`);
    }
}
contactBook.addContact('Vlad','+380975644','vladgracula@gmail.com');
console.log(contactBook.findContact("Anna"));