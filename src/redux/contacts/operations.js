import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      toast.success(
        `The contact ${response.data.name} was successfully created`,
        {
          theme: 'colored',
        }
      );
      return response.data;
    } catch (e) {
      toast.error('Error creating contact', { theme: 'colored' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      toast.info(`The contact ${response.data.name} was successfully deleted`, {
        theme: 'colored',
      });
      return response.data;
    } catch (e) {
      toast.error('There is no such user collection', { theme: 'colored' });
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
