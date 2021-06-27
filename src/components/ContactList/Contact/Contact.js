import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';

const Contact = ({ id, name, number, onDelete }) => {
  const nameToUpperCaseFirstLetter = name
    .split(' ')
    .map(string => string.charAt(0).toUpperCase() + string.slice(1))
    .join(' ');
  return (
    <li className={styles.Contact}>
      <span className={styles.span}>{nameToUpperCaseFirstLetter}:</span>
      <span className={styles.span}> {number}</span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
