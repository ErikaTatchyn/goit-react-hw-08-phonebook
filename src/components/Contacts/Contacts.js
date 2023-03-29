import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Contacts.module.css';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectContactsError,
  selectContactsLoading,
} from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      {' '}
      <h1 className={styles.heading}>Phonebook</h1>
      <ContactForm contacts={contacts} />
      <h2 className={styles.heading}>Contacts</h2>
      {contacts.length > 0 ? (
        <div>
          <Filter />
          <ContactList />
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
        </div>
      ) : (
        <p>Your phonebook is empty. Please add contacts.</p>
      )}
    </>
  );
};
