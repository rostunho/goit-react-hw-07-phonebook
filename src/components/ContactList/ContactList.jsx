import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
// import { removeContactAction } from '../../redux/contacts/contacts-actions';
import { List, Item } from './ContactList.styled';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';

function ContactList() {
  const { data } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  console.log(filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <List>
      {data &&
        filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Contact contact={contact} />
          </Item>
        ))}
    </List>
  );
}

export default ContactList;
