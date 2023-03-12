import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { StyledAppBar, StyledToolbar } from './AppBar.styled';

export const RespAppBar = () => {
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
