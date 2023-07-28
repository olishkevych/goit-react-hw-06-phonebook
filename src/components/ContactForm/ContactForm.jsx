import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import addContact from '../../redux/contactsReducer';
import styles from './ContactForm.module.css';

export const ContactForm = props => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const onInputChange = event => {
    event.target.name === 'number'
      ? setNumber(event.target.value)
      : setName(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();

    const isExisting = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (isExisting) {
      alert(`${isExisting.name} is already in contacts`);
      return;
    }
    const contactToAdd = {
      name: name,
      number: Number(number),
      id: nanoid(),
    };

    dispatch(addContact([...contacts, contactToAdd]));

    setName('');
    setNumber([]);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={onInputChange}
          placeholder="Name"
        />

        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={onInputChange}
          placeholder="Phone number"
        />

        <button type="submit" className={styles.addBtn}>
          Add contact
        </button>
      </form>
    </div>
  );
};
