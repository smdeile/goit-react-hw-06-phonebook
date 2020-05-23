import React from 'react';
import styles from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addContact } from '../../redux/phonebook/phonebookActions';

const СontactForm = ({
  onSubmit,
  state,
  handleChange,
  onChange,
  name,
  number,
}) => {
  return (
    <div className={styles.box_shadow}>
      <form className={styles.form} onSubmit={onSubmit}>
        <label className={styles.formLabel}>
          Name
          <input
            className={styles.input_styles}
            type="text"
            name="name"
            value={name}
            onChange={onChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            className={styles.input_styles}
            type="number"
            name="number"
            value={number}
            onChange={onChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
};
СontactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};

const mapDispatchToProps = dispatch => ({
  onSubmit: event => dispatch(addContact(event)),
});
// export default connect(null, mapDispatchToProps)(HomePage);
export default connect(null, mapDispatchToProps)(СontactForm);
