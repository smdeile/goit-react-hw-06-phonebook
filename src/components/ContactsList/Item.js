import React, { Component } from 'react';
import { connect } from 'react-redux';
import DeleteContact from './DeleteContact';
import { deleteContact } from '../../redux/phonebook/phonebookActions';
import styles from './CL.module.css';

class Item extends Component {
  deleteContact = () => {
    const { element, onDelete } = this.props;
    onDelete(element.id);
  };
  /*handleDelete = () => {
    const { onDeleteContact, contact } = this.props;
    onDeleteContact(contact.id);
  };*/
  render() {
    const el = this.props.element;

    return (
      <>
        <li className={styles.item}>
          <p className={styles.name}>{el.name}</p>
          <p className={styles.number}>{el.number}</p>
          <DeleteContact deleteContact={this.deleteContact} id={el.id} />
        </li>
      </>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(deleteContact(id)),
});
export default connect(null, mapDispatchToProps)(Item);
