import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { Container, StyledTypography, StyledLink } from './HomePage.styled';

export default function Home() {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Container>
      <StyledTypography variant="h3" component="h1">
        You are currently logged in, go to the Contacts page
        <br />
        <StyledLink to="/contacts" component={NavLink}>
          Add your contacts
        </StyledLink>
      </StyledTypography>
    </Container>
  ) : (
    <Container>
      <StyledTypography variant="h3" component="h1">
        Welcome to the personal app for storing your contacts 📱.
        <br />
        Please
        <br />
        <StyledLink to="/register" component={NavLink}>
          register
        </StyledLink>{' '}
        or{' '}
        <StyledLink to="/login" component={NavLink}>
          login
        </StyledLink>
      </StyledTypography>
    </Container>
  );
}
