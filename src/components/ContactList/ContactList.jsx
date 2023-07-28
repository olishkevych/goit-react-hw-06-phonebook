import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import removeContact from '../../redux/contactsReducer';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.contacts.filter);

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            <span>{contact.name} </span>
            <span>{contact.number}</span>
            <button
              className={styles.removeBtn}
              onClick={dispatch(removeContact(contact.id))}
            >
              &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
