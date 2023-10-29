import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllContacts } from 'services/getApi';

export const requestContacts = createAsyncThunk(
  `contacts/getAll`,
  async (_, thunkAPI) => {
    try {
      const contactsAll = await fetchAllContacts();
      console.log('contactsAll', contactsAll);
      return contactsAll;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const INITIAL_STATE = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const contactsFormSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(el => el.id !== action.payload);
    },
    addContact: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
  extraReducers: builder =>
    builder
      .addCase(requestContacts.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contactsAll = action.payload;
      })
      .addCase(requestContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setFilter, deleteContact, addContact } =
  contactsFormSlice.actions;

export const ContactFormReducer = contactsFormSlice.reducer;
