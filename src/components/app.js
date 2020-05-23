import React, { Component } from 'react';
import СontactForm from './СontactForm/СontactForm';
import Wrapper from './Wrapper/Wrapper';
import Filter from './Filter/Filter';
import Notification from './Notofication/Notification';
import ContactsList from './ContactsList/ContactsList';
import { CSSTransition } from 'react-transition-group';
import TransitionRight from './TransitionCss/TransitionRight.module.css';

import shortid from 'shortid';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    notification: false,
    localStorageUpdate: false,
  };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  onSubmit = e => {
    e.preventDefault();
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          this.state.name.toLocaleLowerCase(),
      )
    ) {
      this.setState({ notification: true });
      setTimeout(() => this.setState({ notification: false }), 2000);
    } else {
      this.setState(prevState => {
        return {
          contacts: [
            ...prevState.contacts,
            {
              name: this.state.name,
              number: this.state.number,
              id: shortid.generate(),
            },
          ],
          name: '',
          number: '',
        };
      });
    }
  };
  componentDidMount() {
    const persistadContacts = localStorage.getItem('contacts');
    if (persistadContacts) {
      this.setState({
        contacts: JSON.parse(persistadContacts),
        localStorageUpdate: true,
      });
    }
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  deleteContact = id => {
    this.setState(state => ({
      contacts: state.contacts.filter(contact => contact.id !== id),
    }));
  };
  render() {
    const lengthCont = this.state.contacts.length > 1;
    const notification = this.state.notification;
    const localStorageUpdate = this.state.localStorageUpdate;
    return (
      <>
        <Wrapper tittle="Phonebook">
          <CSSTransition
            in={notification}
            timeout={250}
            unmountOnExit
            classNames={TransitionRight}
          >
            <Notification />
          </CSSTransition>
        </Wrapper>
        <СontactForm
          onSubmit={this.onSubmit}
          state={this.state}
          handleChange={this.handleChange}
        />

        <CSSTransition
          in={lengthCont}
          timeout={250}
          unmountOnExit
          classNames={TransitionRight}
        >
          <Filter state={this.state} handleChange={this.handleChange} />
        </CSSTransition>
        {localStorageUpdate && (
          <ContactsList state={this.state} deleteContact={this.deleteContact} />
        )}
      </>
    );
  }
}
