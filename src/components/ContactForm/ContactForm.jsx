import { useState } from 'react';
import toast from 'react-hot-toast';
import { Form, Label, Input, AddButton } from './ContactForm.styled';
import {
  useFetchContactsQuery,
  useAddNewContactMutation,
} from 'redux/contacts/contactsSlice';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useFetchContactsQuery();
  const [addNewContact] = useAddNewContactMutation();

  function handleInput(event) {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newContact = {
      name,
      phone,
    };

    const unUniqueContact = data.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (unUniqueContact) {
      toast.error(`"${name}" is already in contacts`);
      clearForm();
      return;
    }

    addNewContact(newContact);
    toast.success(`"${name}" added to your contacts`);
    clearForm();
  }

  function clearForm() {
    setName('');
    setPhone('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleInput}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInput}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <AddButton type="submit">Add contact</AddButton>
    </Form>
  );
}

export default ContactForm;
