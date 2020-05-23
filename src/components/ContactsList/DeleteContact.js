import React from 'react';
import PropTypes from 'prop-types';
import styles from './CL.module.css';

const DeleteContact = ({ deleteContact, id }) => (
  <button key={id} onClick={deleteContact} className={styles.button}>
    &#x2716;
  </button>
);
DeleteContact.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
export default DeleteContact;
