import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  component: React.ReactElement;
  redirectTo: string;
}

export default function PrivateRoute({ component, redirectTo }: PrivateRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
