
import Loader from '../../components/Loader/Loader';
import LoginForm from '../../components/LoginForm/LoginForm';
import PageTitle from '../../components/PageTitle/PageTitle';
import { selectAuthError, selectIsLoading } from '../../redux/auth/selectors';
import { useAppSelector } from '../../hooks/redux';

export default function LoginPage() {
  const isLoading = useAppSelector(selectIsLoading);
  const error = useAppSelector(selectAuthError);
  return (
    <div>
      <PageTitle>Please log in</PageTitle>
      {isLoading && <Loader />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm />
    </div>
  );
}
