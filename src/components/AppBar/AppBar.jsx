import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import { useAuth } from 'hooks';
import { StyledAppBar, StyledToolbar } from './AppBar.styled';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledAppBar>
      <StyledToolbar
        sx={{
          '@media only screen and (max-width: 600px)': {
            justifyContent: 'space-around',
          },
        }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default AppBar;
