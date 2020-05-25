import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';
import { connect } from 'react-redux';
import { filterContact } from '../../redux/phonebook/phonebookActions';
class Filter extends Component {
  state = { filter: '' };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
    return this.props.onChange(value);
  };

  render() {
    return (
      <div className={styles.box_shadow}>
        <label className={styles.form}>
          Find contacts by name
          <input
            className={styles.input_styles}
            type="text"
            name="filter"
            value={this.state.filter}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}

// Filter.propTypes = {
//   handleChange: PropTypes.func.isRequired,
//   state: PropTypes.object.isRequired,
// };

const mapDispatchToProps = dispatch => ({
  onChange: filter => dispatch(filterContact(filter)),
});
export default connect(null, mapDispatchToProps)(Filter);
