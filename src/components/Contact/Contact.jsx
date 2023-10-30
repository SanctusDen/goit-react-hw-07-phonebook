import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/ContactFormReducer';
import { DeleteBtn, Item, Name } from './Contact.styled';

export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn type="button" onClick={() => dispatch(deleteContacts(id))}>
        Delete
      </DeleteBtn>
    </Item>
  );
};
