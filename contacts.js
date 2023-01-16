const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const contacs = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(contacs);
    console.table(parsedContacts);
  } catch (error) {
    console.log(error);
  }
}

async function getContactById(contactId) {
  try {
    const contacs = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(contacs);
    const contactByID = parsedContacts.filter(
      (contact) => contact.id === contactId.toString()
    );
    console.table(contactByID);
  } catch (error) {
    console.log(error);
  }
}
async function addContact(name, email, phone) {
  try {
    const contacs = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(contacs);
    console.table(parsedContacts);

    const newContacts = {
      id: v4(),
      name: name.toString(),
      email: email.toString(),
      phone: phone.toString(),
    };
    console.log(newContacts);

    parsedContacts.push(newContacts);
    console.table(parsedContacts);

    await fs.writeFile(contactsPath, JSON.stringify(parsedContacts), "utf-8");
  } catch (error) {
    console.log(error);
  }
}
async function removeContact(contactId) {
  try {
    const contacs = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(contacs);
    const remove = parsedContacts.filter(
      (contact) => contact.id !== contactId.toString()
    );
    console.table(remove);

    await fs.writeFile(contactsPath, JSON.stringify(remove), "utf-8");
  } catch (error) {
    console.log(error);
  }
}

module.exports = { listContacts, getContactById, removeContact, addContact };
