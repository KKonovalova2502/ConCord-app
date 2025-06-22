import { useState } from 'react';
import css from './EditContactModal.module.css';
import { updateContact } from '../../redux/contacts/operations';
import { useAppDispatch } from '../../hooks/redux';
import type { Contact } from '../../types/Contact';

interface EditContactModalProps {
  contact: Contact;
  onClose: () => void;
}

const EditContactModal = ({ contact, onClose }: EditContactModalProps) => {
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);
  const dispatch = useAppDispatch();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(updateContact({ id: contact.id, name, number }))
      .unwrap()
      .then(() => onClose());
  };

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <h3 className={css.title}>Edit contact</h3>
        <form onSubmit={handleSubmit}>
          <div className={css.fieldgroup}>
            <label className={css.label}>Name</label>
            <input
              className={css.input}
              value={name}
              onChange={(evt) => setName(evt.target.value)}
            />
          </div>
          <div className={css.fieldgroup}>
            <label className={css.label}>Number</label>
            <input
              className={css.input}
              value={number}
              onChange={(evt) => setNumber(evt.target.value)}
            />
          </div>

          <div className={css.buttons}>
            <button type="submit" className={`${css.button} ${css.confirm}`}>
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className={`${css.button} ${css.cancel}`}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditContactModal;
