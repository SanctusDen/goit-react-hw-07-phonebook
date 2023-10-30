import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/ContactFormReducer';
import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, id, newContact }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <Name newContact={newContact}>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
