import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import {
  Container,
  StyledLockIcon,
  StyledTypography,
  Form,
  StyledTextField,
  StyledBox,
  StyledButton,
  StyledInputBox,
} from './RegisterForm.styled';

import AccountCircle from '@mui/icons-material/AccountCircle';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import KeyIcon from '@mui/icons-material/Key';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
        Register
      </StyledTypography>
      <StyledBox>
        <Form onSubmit={handleSubmit} autoComplete="off">
          <StyledInputBox>
            <AccountCircle sx={{ color: 'white', mr: 1, my: 0.5 }} />
            <StyledTextField
              type="text"
              name="name"
              id="name"
              label="Username"
              variant="standard"
            />
          </StyledInputBox>

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
            Register
          </StyledButton>
        </Form>
      </StyledBox>
    </Container>
  );
};

export default RegisterForm;
