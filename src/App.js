import { Toaster } from 'react-hot-toast';
import AppTitle from 'components/AppTitile/AppTitle';
import ContactForm from 'components/ContactForm/ContactForm';
import Title from 'components/Title/Title';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

function App() {
  return (
    <>
      <AppTitle title="Phonebook" />
      <ContactForm />
      <Title title="Contacts" />
      <Filter placeholder="Find contacts by name" />
      <ContactList />
      <Toaster position="top-right" />
    </>
  );
}

export default App;
