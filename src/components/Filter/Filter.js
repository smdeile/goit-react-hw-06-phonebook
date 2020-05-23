import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebookActions';

const Filter = ({ state, onChange }) => {
  return (
    <div className={styles.box_shadow}>
      <label className={styles.form}>
        Find contacts by name
        <input
          className={styles.input_styles}
          type="text"
          name="filter"
          value={state.filter}
          onChange={onChange}
        />
      </label>
    </div>
  );
};
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  state: PropTypes.object.isRequired,
};
const mapDispatchToProps = dispatch => ({
  onChange: ({ target }) => dispatch(filterContact(target)),
});
export default connect(null, mapDispatchToProps)(Filter);
