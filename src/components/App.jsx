import 'modern-normalize';
import '../index.css';
import './App.css';

import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

function App() {
  // Початковий стан
  const contactsData = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  // Під час завантаження застосунку контакти, якщо такі є, зчитуються з локального сховища і записуються у стан.
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? contactsData
  );

  // Застосунок зберігає масив контактів між оновленням сторінки в локальному сховищі.
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // Додати контакт
  const handleAddContact = (name, number) => {
    if (!name.trim() || !number.trim()) {
      alert('Required!');
      return;
    }
    const newContactData = {
      id: nanoid(4),
      name: name.trim(),
      number: number.trim(),
    };
    setContacts(prev => [...prev, newContactData]);
  };

  // Видалити контакт
  const handleDeleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  // Шукати контакт
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = e => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  // Фільтруємо контакти згідно значення в input та скидаємо регістр
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
      <div className="mainWrap">
        <h1>Phonebook</h1>
        <ContactForm handleAddContact={handleAddContact} />
        <SearchBox searchValue={searchValue} handleSearch={handleSearch} />
        <ContactList
          filterContacts={filterContacts}
          handleDeleteContact={handleDeleteContact}
        />
      </div>
    </>
  );
}

export default App;
