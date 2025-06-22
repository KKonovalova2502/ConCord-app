import css from './UserMenu.module.css';
import { selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

export default function UserMenu() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.logoutBtn} type="button" onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
}
