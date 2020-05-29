import React, { Component } from 'react';
import { contacts, filter } from '../../redux/selectors';
import PropTypes from 'prop-types';
import styles from './CL.module.css';
import Item from './Item';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import TransitionStyles from '../TransitionCss/Transition.module.css';
import { connect } from 'react-redux';

class ContactsList extends Component {
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
              <Item element={el} />
              {/* <li className={styles.item}>
                <p className={styles.name}>{el.name}</p>
                <p className={styles.number}>{el.number}</p>
                <DeleteContact
                  deleteContact={() => this.deleteContact(el.id)}
                  id={el.id}
                />
              </li> */}
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
  contacts: contacts(state),
  filter: filter(state),
});

export default connect(mapStateToProps)(ContactsList);
