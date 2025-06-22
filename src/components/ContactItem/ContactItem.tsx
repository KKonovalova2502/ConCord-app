import { useState } from 'react';
import style from './ContactItem.module.css';
import EditContactModal from '../EditContactModal/EditContactModal';
import { Phone, User } from 'lucide-react';
import type { Contact } from '../../types/Contact';


interface ContactItemProps {
  data: Contact;
  onDeleteClick: () => void;
}

const ContactItem = ({ data, onDeleteClick }:ContactItemProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { name, number } = data;

  return (
    <div className={style.container}>
      <p className={style.data}>
        <User size={18} style={{ marginRight: '8px', color: '#ffeba7' }} />
        {name}
      </p>
      <p className={style.data}>
        <Phone size={18} style={{ marginRight: '8px', color: '#ffeba7' }} />
        {number}
      </p>
      <div className={style.wrapForBtn}>
        <button className={style.btn} onClick={() => setIsEditing(true)}>
          Edit
        </button>
        <button className={style.btn} onClick={onDeleteClick}>
          Delete
        </button>
      </div>

      {isEditing && (
        <EditContactModal contact={data} onClose={() => setIsEditing(false)} />
      )}
    </div>
  );
};

export default ContactItem;
