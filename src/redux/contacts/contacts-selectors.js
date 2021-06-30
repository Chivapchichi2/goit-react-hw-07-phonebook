const getContactsItems = state => state.contacts.items;
const getContactsFilter = state => state.contacts.filter;
const getContactsLoading = state => state.contacts.loading;

export default { getContactsItems, getContactsFilter, getContactsLoading };
