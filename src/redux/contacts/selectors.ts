import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter, selectNumberFilter } from '../filters/selectors';
import type { Contact } from '../../types/Contact';
import type { RootState } from '../store';

export const selectContacts = (state: RootState) => state.contacts.items;
export const selectLoading = (state: RootState) => state.contacts.loading;
export const selectError = (state: RootState) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, nameFilter, numberFilter) => {
    const normalizedName = nameFilter.toLowerCase().trim();
    const normalizedNumber = numberFilter.trim();

    return contacts.filter((contact: Contact) => {
      const matchByName =
        normalizedName === '' ||
        contact.name.toLowerCase().includes(normalizedName);
      const matchByNumber =
        normalizedNumber === '' || contact.number.includes(normalizedNumber);
      return matchByName && matchByNumber;
    });
  },
);
