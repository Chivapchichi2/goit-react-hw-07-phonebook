import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import actions from '../../redux/contacts/contacts-actions';
import Contact from './Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, deleteContact }) => {
  let letter = '';
  const shouldWriteLetter = name => {
    if (name.charAt(0).toUpperCase() !== letter) {
      letter = name.charAt(0).toUpperCase();
      return true;
    }
    return false;
  };
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, name, number }) => (
        <div key={id}>
          {shouldWriteLetter(name) && (
            <p key={letter} className={styles.letter}>
              {letter}
            </p>
          )}
          <Contact
            id={id}
            name={name}
            number={number}
            onDelete={deleteContact}
          />
        </div>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteContact: idContact => dispatch(actions.deleteContact(idContact)),
});

export default connect(null, mapDispatchToProps)(ContactList);
