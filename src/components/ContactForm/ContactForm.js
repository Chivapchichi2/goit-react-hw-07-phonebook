import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const { name } = this.state;
    const { items } = this.props;
    const nameToLowerCase = name.toLowerCase();
    if (items.some(item => item.name === nameToLowerCase)) {
      // eslint-disable-next-line
      return alert(
        `${nameToLowerCase
          .split(' ')
          .map(string => string.charAt(0).toUpperCase() + string.slice(1))
          .join(
            ' ',
          )} is already in contacts. Change contact's name or delete old.`,
      );
    }
    this.setState({ name: '', number: '' });
    return this.props.onSubmit({ ...this.state, name: nameToLowerCase });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.ContactForm}>
        <label className={styles.label}>
          Name:
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={this.handleInputChange}
            placeholder="Ivanov Ivan (ivanov ivan)"
          />
        </label>
        <label className={styles.label}>
          Number:
          <input
            className={styles.input}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={number}
            onChange={this.handleInputChange}
            placeholder="099 123 45 67 (099-123-45-67)"
          />
        </label>
        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

const mapStateToProps = state => ({
  items: state.contacts.items,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) =>
    dispatch(
      contactsOperations.addContact({
        name,
        number,
      }),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
