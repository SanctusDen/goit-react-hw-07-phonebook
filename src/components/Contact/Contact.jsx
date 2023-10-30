import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/ContactFormReducer';
import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, id, newContact }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = contactId => {
    dispatch(deleteContacts(contactId));
  };

  return (
    <Item key={id}>
      <Name newContact={newContact}>
        {name}: {number}
      </Name>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(handleDeleteContact(id))}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};
