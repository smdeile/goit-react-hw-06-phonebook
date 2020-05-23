import React from 'react';
import DeleteContact from './DeleteContact';
import PropTypes from 'prop-types';
import styles from './CL.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TransitionStyles from '../TransitionCss/Transition.module.css';
import { connect } from 'react-redux';
import { addInfo, addContact } from '../../redux/phonebook/phonebookActions';

const ContactsList = ({ state, deleteContact, name }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {console.log(name)}
    {name
      .filter(name => {
        return name.name.toLocaleLowerCase().includes(state.filter);
      })
      .map(el => (
        <CSSTransition
          key={el.id}
          timeout={250}
          unmountOnExit
          classNames={TransitionStyles}
        >
          <li className={styles.item}>
            <p className={styles.name}>{el.name}</p>
            <p className={styles.number}>{el.number}</p>
            <DeleteContact
              deleteContact={() => deleteContact(el.id)}
              id={el.id}
            />
          </li>
        </CSSTransition>
      ))}
  </TransitionGroup>
);
ContactsList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
const mapStateToProps = state => ({
  name: state.contacts,
  // number: state.addContactInfo.number,
});
export default connect(mapStateToProps)(ContactsList);
