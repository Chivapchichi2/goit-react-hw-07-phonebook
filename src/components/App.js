import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Container from './Container';
import Filter from './Filter';
import Header from './Header';
import Notification from './Notification';
import Section from './Section/Section';
import contactsOperations from '../redux/contacts/contacts-operations';
import contactsSelectors from '../redux/contacts/contacts-selectors';

const App = ({ filter, items, dispatch, loading }) => {
  useEffect(() => dispatch(contactsOperations.fetchContacts()), []);

  const cleanFilter = filter.toLowerCase();
  const filteredContacts = items
    .filter(item => item.name.includes(cleanFilter))
    .sort((a, b) => a.name.localeCompare(b.name));
  return (
    <Container>
      <Header />
      <Section title="Phone book">
        <ContactForm />
      </Section>
      <Section title="Contacts">
        {loading && <h2>Loading...</h2>}
        {items[0] ? <Filter /> : <Notification message="No contacts added" />}
        {items[0] && !filteredContacts[0] && (
          <Notification message="No contact found" />
        )}
        {filteredContacts[0] && <ContactList contacts={filteredContacts} />}
      </Section>
    </Container>
  );
};

App.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  items: contactsSelectors.getContactsItems(state),
  filter: contactsSelectors.getContactsFilter(state),
  loading: contactsSelectors.getContactsLoading(state),
});

export default connect(mapStateToProps)(App);
