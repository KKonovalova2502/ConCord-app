import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

interface RestrictedRouteProps {
  component: React.ReactElement;
  redirectTo: string;
}

export default function RestrictedRoute({ component, redirectTo }: RestrictedRouteProps) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <Navigate to={redirectTo} /> : component;
}
