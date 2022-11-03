import React from 'react';
import { PropTypes } from 'prop-types';
import css from './ContactList.module.css';

const ContactList = ({ contacts, findContact, deleteContacts }) => {
  return (
    <ul className={css.contacts}>
      {findContact
        ? findContact.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                type="button"
                name={id}
                onClick={() => deleteContacts(id)}
              >
                Delete
              </button>
            </li>
          ))
        : contacts.map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button
                className={css.delete}
                type="button"
                name={id}
                onClick={deleteContacts}
              >
                Delete
              </button>
            </li>
          ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  findContact: PropTypes.bool.isRequired,
  deleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
