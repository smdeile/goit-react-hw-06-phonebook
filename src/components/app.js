import React, { Component } from 'react';
import СontactForm from './СontactForm/СontactForm';
import Wrapper from './Wrapper/Wrapper';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import TransitionRight from './TransitionCss/TransitionRight.module.css';
import styles from './Wrapper/Wrapper.module.css';
class App extends Component {
  // state = {
  //   contacts: [
  //     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  //   ],
  //   filter: '',
  //   name: '',
  //   number: '',
  //   notification: false,
  //   localStorageUpdate: false,
  // };

  // componentDidMount() {
  //   const persistadContacts = localStorage.getItem('contacts');
  //   if (persistadContacts) {
  //     this.setState({
  //       contacts: JSON.parse(persistadContacts),
  //       localStorageUpdate: true,
  //     });
  //   }
  // }
  // componentDidUpdate(prevState, prevProps) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    // const localStorageUpdate = this.state.localStorageUpdate;   \
    const { contacts } = this.props;
    const lengthCont = contacts.length > 1;
    console.log(contacts);
    return (
      <div className={styles.app}>
        <Wrapper tittle="Phonebook"></Wrapper>
        <СontactForm />

        <CSSTransition
          in={lengthCont}
          timeout={250}
          unmountOnExit
          classNames={TransitionRight}
        >
          <Filter />
        </CSSTransition>
        {<ContactsList state={this.state} deleteContact={this.deleteContact} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  contacts: state.contacts,
});
export default connect(mapStateToProps)(App);
