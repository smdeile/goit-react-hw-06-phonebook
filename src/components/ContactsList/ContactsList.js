import React, { Component } from 'react';
import DeleteContact from './DeleteContact';
import PropTypes from 'prop-types';
import styles from './CL.module.css';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TransitionStyles from '../TransitionCss/Transition.module.css';
import { connect } from 'react-redux';
import { deleteContact } from '../../redux/phonebook/phonebookActions';
class ContactsList extends Component {
  deleteContact = id => this.props.onDelete(id);
  render() {
    const { filter, contacts } = this.props;
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {contacts
          .filter(name => {
            return name.name.toLocaleLowerCase().includes(filter);
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
                  deleteContact={() => this.deleteContact(el.id)}
                  id={el.id}
                />
              </li>
            </CSSTransition>
          ))}
      </TransitionGroup>
    );
  }
}

// ContactsList.propTypes = {
//   deleteContact: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
// };
const mapStateToProps = state => ({
  contacts: state.contacts,
  filter: state.filter,
});
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
