import React, { Component } from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebookActions';
import transitionRight from '../TransitionCss/TransitionRight.module.css';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';

class СontactForm extends Component {
  state = {
    name: '',
    number: '',
    contacts: this.props.contacts,
    notification: false,
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (
      this.props.contacts.find(
        contact =>
          contact.name.toLocaleLowerCase() ===
          this.state.name.toLocaleLowerCase(),
      )
    ) {
      this.setState({ notification: true });
      setTimeout(() => this.setState({ notification: false }), 2000);
    } else {
      const newContact = { name: this.state.name, number: this.state.number };
      this.setState({ name: '', number: '' });
      return this.props.onSubmit(newContact);
    }
  };

  render() {
    const { name, number, notification } = this.state;

    return (
      <div className={styles.box_shadow}>
        <CSSTransition
          in={notification}
          timeout={250}
          unmountOnExit
          classNames={transitionRight}
        >
          <Notification />
        </CSSTransition>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.input_styles}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.formLabel}>
            Number
            <input
              className={styles.input_styles}
              type="number"
              name="number"
              value={number}
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.button} type="submit">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
// СontactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
// };
const mapStateToProps = state => ({ contacts: state.contacts });
const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(addContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(СontactForm);
