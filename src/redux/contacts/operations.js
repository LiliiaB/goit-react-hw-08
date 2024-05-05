import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const contacts = await axios.get(
        "https://connections-api.herokuapp.com/contacts"
      );
      return contacts.data;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://connections-api.herokuapp.com/contacts",
        {
          name: contact.name,
          number: contact.number,
        }
      );
      toast.success("New contact added");
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      toast.success("Contact deleted");
      return response.data;
    } catch (e) {
      toast.error(e.message);
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchContactById = createAsyncThunk(
  "contacts/fetchById",
  async (contactId, thunkAPI) => {
    try {
      const contact = await axios.get(
        `https://connections-api.herokuapp.com/contacts/${contactId}`
      );
      return contact.data.id;
    } catch (error) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
