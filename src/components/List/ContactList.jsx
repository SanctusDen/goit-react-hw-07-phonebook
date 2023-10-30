import { List } from './ContactList.styled';
import { Contact } from 'components/Contact/Contact';
import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
// import { createSelector } from '@reduxjs/toolkit';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFoundContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase(contact.name))
    );
  };

  return (
    <List>
      {getFoundContacts !== null &&
        getFoundContacts().map(({ name, number, id }) => {
          return (
            <Contact key={id} id={id} name={name} number={number}></Contact>
          );
        })}
    </List>
  );
};

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
