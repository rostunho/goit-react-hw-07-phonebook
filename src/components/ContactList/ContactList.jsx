import Contact from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { Bars } from 'react-loader-spinner';
import { List, Item, BarsBox } from './ContactList.styled';
import { useFetchContactsQuery } from '../../redux/contacts/contactsSlice';

function ContactList() {
  const { data, isFetching } = useFetchContactsQuery();

  const filter = useSelector(state => state.filter);

  console.log(filter);

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
            <Contact contact={contact} />
          </Item>
        ))}
    </List>
  );
}

export default ContactList;
