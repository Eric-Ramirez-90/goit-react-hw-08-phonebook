import { useAuth } from 'hooks';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return <nav>{isLoggedIn && <Link to="/contacts">Contacts</Link>}</nav>;
};
