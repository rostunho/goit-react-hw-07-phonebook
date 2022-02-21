import PropTypes from 'prop-types';
import { CgProfile } from 'react-icons/cg';
import { IoMdRemove } from 'react-icons/io';
import { Rings } from 'react-loader-spinner';
import { useRemoveContactMutation } from 'redux/contacts/contactsSlice';
import { Card, Info, Name, Number, DeleteButton } from './Contact.styled';

function Contact({ contact }) {
  const { id, name, phone } = contact;
  const [removeContact, { isLoading }] = useRemoveContactMutation();

  return (
    <Card>
      <CgProfile size="50px" color="var(--accent-color)" />

      <Info>
        <Name>{name} </Name>
        <Number>{phone}</Number>
      </Info>

      <DeleteButton
        type="button"
        onClick={() => removeContact(id)}
        aria-label="Remove contact"
      >
        {isLoading ? (
          <Rings color="#ffffff" height={25} width={25} />
        ) : (
          <IoMdRemove size="25px" color="#fff" />
        )}
      </DeleteButton>
    </Card>
  );
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default Contact;
