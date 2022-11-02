import React, { Component } from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  newContact = newObj => {
    if (this.state.contacts.some(x => x.name === newObj.name)) {
      alert(`${newObj.name} is already is contacts`);
      return false;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newObj],
    }));
    return true;
  };

  onChangeFilter = event => {
    this.setState({
      filter: event.target.value.toLowerCase(),
    });
  };

  filter = () => {
    if (this.state.filter !== '') {
      return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter)
      );
    }
    return false;
  };
  deleteContacts = event => {
    const index = this.state.contacts.findIndex(
      x => x.id === event.target.name
    );

    this.setState(this.state.contacts.splice(index, 1));
  };

  render() {
    const { contacts } = this.state;
    const findContact = this.filter();
    const visibleContacts = contacts;

    return (
      <div>
        <h1 className={css.setion_title}>Phonebook</h1>
        <ContactForm newContact={this.newContact} />
        <Filter onChange={this.onChangeFilter} />
        <h2 className={css.setion_title}>Contacts</h2>
        <ContactList
          findContact={findContact}
          contacts={visibleContacts}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}
