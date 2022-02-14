import { useState } from 'react';
import { nanoid } from 'nanoid';
import toast from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux';
import { addNewContactAction } from '../../redux/contacts/contacts-actions';
import { Form, Label, Input, AddButton } from './ContactForm.styled';

function ContactForm() {
  const [newContact, setNewContact] = useState({
    name: '',
    number: '',
  });

  const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  function handleInput(event) {
    const { name, value } = event.target;
    setNewContact(prevContact => ({ ...prevContact, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const { name, number } = newContact;
    const contactUpdating = {
      id: nanoid(5),
      name,
      number,
    };

    addNewContact(contactUpdating);
    setNewContact({ name: '', number: '' });
  }

  function addNewContact(newContact) {
    const unUniqueContact = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );

    if (unUniqueContact) {
      toast.error(`"${newContact.name}" is already in contacts`);
    } else {
      dispatch(addNewContactAction(newContact));
      toast.success(`"${newContact.name}" added to your contacts`);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={newContact.name}
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
          name="number"
          value={newContact.number}
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
