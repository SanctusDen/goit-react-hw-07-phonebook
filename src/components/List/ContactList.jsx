import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return <Contact key={id} id={id} name={name} number={number}></Contact>;
      })}
    </List>
  );
};
