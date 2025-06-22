import css from './ConfirmDeleteModal.module.css';

interface ConfirmDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  contactName: string;
}

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, contactName }:ConfirmDeleteModalProps) => {
  if (!isOpen) return null;

  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p className={css.text}>
          Are you sure you want to delete <strong>"{contactName}"</strong>?
        </p>
        <div className={css.buttons}>
          <button
            className={`${css.button} ${css.confirm}`}
            onClick={onConfirm}
          >
            Yes
          </button>
          <button className={`${css.button} ${css.cancel}`} onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
