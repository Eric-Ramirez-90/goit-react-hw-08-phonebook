import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  Form,
  Container,
  StyledLockIcon,
  StyledTypography,
  StyledTextField,
  StyledBox,
  StyledButton,
  StyledInputBox,
} from './LoginForm.styled';

import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <StyledLockIcon />
      <StyledTypography variant="h3" component="h1">
        Log In
      </StyledTypography>
      <StyledBox>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <StyledInputBox>
            <AlternateEmailIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <StyledTextField
              type="email"
              name="email"
              id="email"
              label="Email"
              variant="standard"
            />
          </StyledInputBox>

          <StyledInputBox>
            <KeyIcon sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <StyledTextField
              type="password"
              name="password"
              id="password"
              label="Password"
              variant="standard"
            />
          </StyledInputBox>

          <StyledButton type="submit" variant="outlined">
            Log In
          </StyledButton>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default LoginForm;
