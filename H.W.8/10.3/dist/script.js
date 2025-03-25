"use strict";

var contactBook = {
  contacts: [{
    name: 'John',
    phoneNumber: '+4478985463',
    email: 'john298@gmail.com'
  }, {
    name: 'Anna',
    phoneNumber: '+380984776552',
    email: 'annacarenina1878@gmail.com'
  }],
  findContact: function findContact(name) {
    var found = this.contacts.filter(function (contact) {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    return found;
  },
  addContact: function addContact(name, phoneNumber, email) {
    this.contacts.push({
      name: name,
      phoneNumber: phoneNumber,
      email: email
    });
    console.log("\u041A\u043E\u043D\u0442\u0430\u043A\u0442 ".concat(name, " \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D!"));
  }
};
contactBook.addContact('Vlad', '+380975644', 'vladgracula@gmail.com');
console.log(contactBook.findContact("Anna"));