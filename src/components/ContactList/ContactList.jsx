import Contact from 'components/Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { removeContactAction } from '../../redux/contacts/contacts-actions';
import { List, Item } from './ContactList.styled';

function ContactList() {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  function removeContact(contactId) {
    dispatch(removeContactAction(contactId));
  }

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <Item key={contact.id}>
          <Contact contact={contact} deleteContact={removeContact} />
        </Item>
      ))}
    </List>
  );
}

export default ContactList;
