import Contacts from '../Contact/Contact';
import s from './ContactList.module.css';

const ContactList = ({ handleDeleteContact, filterContacts }) => {
  return (
    <div>
      <ul className={s.list}>
        {filterContacts.map(contact => (
          <li key={contact.id} className={s.item}>
            <Contacts
              id={contact.id}
              name={contact.name}
              number={contact.number}
              handleDeleteContact={handleDeleteContact}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
