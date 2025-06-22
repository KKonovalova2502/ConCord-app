import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import type { Contact } from '../../types/Contact';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async () => {
          const res = await axios.get<Contact[]>('/contacts');
      return res.data;
     },
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }:Omit<Contact, 'id'>) => {
      const res = await axios.post<Contact>('/contacts', { name, number });
      toast.success(`Contact ${res.data.name} added successfully`);
      return res.data;
      },
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId:string) => {
    
      const res = await axios.delete<Contact>(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully');
      return res.data;
   
  },
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, name, number }: Contact) => {
    
      const res = await axios.patch<Contact>(`/contacts/${id}`, { name, number });
      toast.success('Contact updated successfully');
      return res.data;
    
  },
);
