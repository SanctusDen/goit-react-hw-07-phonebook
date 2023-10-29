import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://653bb1be2e42fd0d54d587a2.mockapi.io',
});

export const fetchAllContacts = async () => {
  const { data } = await instance.get('/contacts');
  return data;
};

export const fetchAddContacts = async newContacts => {
  const { data } = await instance.post('/contacts', newContacts);
  return data;
};

export const fetchDeleteContacts = async contactsId => {
  const { data } = await instance.delete(`/contacts/${contactsId}`);
  return data;
};
