import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';
import { useRemoveContactMutation } from 'redux/contacts/contactsSlice';
import { List, Item, BarsBox } from './ContactList.styled';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';

function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();
  const [removeContact, { isLoading }] = useRemoveContactMutation();

  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = data?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <List>
      {isFetching && (
        <BarsBox>
          <Bars color="var(--accent-color)" />
        </BarsBox>
      )}
      {data &&
        filteredContacts.map(contact => (
          <Item key={contact.id}>
            <Contact
              contact={contact}
              isLoading={isLoading}
              removeContact={removeContact}
            />
          </Item>
        ))}
    </List>
  );
}

export default ContactList;
