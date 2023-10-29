import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/ContactFormReducer';
import { FilterField, FilterLabel } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FilterField id="filter" onChange={handleFilterChange} />
    </>
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
