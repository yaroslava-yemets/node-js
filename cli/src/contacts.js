const { readFile } = require('fs');
const fs = require('fs/promises');
const path = require('path');
const crypto = require('crypto');

const FILE = path.join(__dirname, 'contacts.json');

/**
 * Function to fetch data prom file and return it parsed
 * @returns
 */
async function readData() {
  const result = await fs.readFile(FILE, 'utf8');

  return JSON.parse(result);
}

async function listContacts() {
  return await readData();
}

async function getContactById(contactId) {
  const contacts = await readData();
  const contact = contacts.find((contact) => contact.id === contactId);

  return contact;
}

async function removeContact(contactId) {
  const contacts = await readData();
  const contactIndex = contacts.findIndex(
    (contact) => contact.id === contactId,
  );
  const deletedContact = contacts[contactIndex];

  if (deletedContact) contacts.splice(contactIndex, 1);

  await fs.writeFile(FILE, JSON.stringify(contacts, null, 2));

  return deletedContact;
}

async function addContact(name, email, phone) {
  const contacts = await readData();
  const newContact = { id: crypto.randomUUID(), name, email, phone };

  contacts.push(newContact);

  await fs.writeFile(FILE, JSON.stringify(contacts, null, 2));

  return newContact;
}

module.exports = { listContacts, getContactById, addContact, removeContact };
