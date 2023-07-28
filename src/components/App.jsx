import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import styles from './App.module.css';
import { persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <div className={styles.wrapper}>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </PersistGate>
  );
};
