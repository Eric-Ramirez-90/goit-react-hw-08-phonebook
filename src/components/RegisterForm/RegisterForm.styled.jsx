import styled from '@emotion/styled';
import LockIcon from '@mui/icons-material/Lock';
import { Typography, TextField, Box, Button } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  height: 850px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;

export const StyledLockIcon = styled(LockIcon)`
  font-size: 40px;
  color: red;
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  margin-top: 16px;
`;

export const StyledTypography = styled(Typography)`
  color: rgb(81, 129, 234);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 320px;
  padding: 16px;
`;

export const StyledInputBox = styled(Box)`
  display: flex;
  align-items: flex-end;
`;
export const StyledTextField = styled(TextField)`
  width: 400px;
  color: white;

  & label.Mui-focused {
    color: white;
  }
  &:hover fieldset {
    border-color: white;
  }
  &.Mui-focused fieldset {
    border-color: white;
  }
  & .MuiInput-underline:after {
    border-bottom-color: white;
  }
`;

export const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  height: 300px;
  padding: 16px;
  background-color: rgb(81, 129, 234, 0.7);
  border-radius: 10px;
`;

export const StyledButton = styled(Button)`
  color: rgba(0, 0, 0, 0.7);
  border: 2px solid rgb(81, 129, 234);
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    border-color: white;
    color: white;
  }
`;
