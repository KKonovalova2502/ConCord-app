import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import type { Contact } from '../../types/Contact';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = () => {
  const contacts = useAppSelector(selectFilteredContacts);
  const dispatch = useAppDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState<Contact | null>(null);

  const openModal = (contact: Contact) => {
    setContactToDelete(contact);
    setModalOpen(true);
  };

  const handleConfirmDelete = () => {
    const contact = contactToDelete;
    if (!contact) return;

    dispatch(deleteContact(contactToDelete.id));
    setModalOpen(false);
    setContactToDelete(null);
  };

  const handleCancel = () => {
    setModalOpen(false);
    setContactToDelete(null);
  };

  return (
    <>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <ContactItem data={contact} onDeleteClick={() => openModal(contact)} />
          </li>
        ))}
      </ul>

      <ConfirmDeleteModal
        isOpen={modalOpen}
        onClose={handleCancel}
        onConfirm={handleConfirmDelete}
        contactName={contactToDelete?.name || ''}
      />
    </>
  );
};

export default ContactList;
