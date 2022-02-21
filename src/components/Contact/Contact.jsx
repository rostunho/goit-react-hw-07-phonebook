import PropTypes from 'prop-types';
import { Card, Info, Name, Number, DeleteButton } from './Contact.styled';
import { CgProfile } from 'react-icons/cg';
import { IoMdRemove } from 'react-icons/io';
import { useRemoveContactMutation } from 'redux/contacts/contactsSlice';

function Contact({ contact }) {
  const { id, name, number } = contact;
  const [removeContact] = useRemoveContactMutation();

  return (
    <Card>
      <CgProfile size="50px" color="var(--accent-color)" />

      <Info>
        <Name>{name} </Name>
        <Number>{number}</Number>
      </Info>

      <DeleteButton
        type="button"
        onClick={() => removeContact(id)}
        aria-label="Remove contact"
      >
        <IoMdRemove size="25px" color="#fff" />
      </DeleteButton>
    </Card>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
