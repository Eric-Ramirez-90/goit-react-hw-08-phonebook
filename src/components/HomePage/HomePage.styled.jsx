import styled from '@emotion/styled';
import { Link, Typography } from '@mui/material';
import bgPhonebook from '../../images/bgPhonebook.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 850px;
  padding: 0 22px;

  background-image: url(${bgPhonebook});
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;

export const StyledTypography = styled(Typography)`
  margin-top: 26px;
  text-align: center;
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration-color: white;

  :hover {
    color: rgb(81, 129, 234);
    text-decoration-color: rgb(81, 129, 234, 0.7);
  }
`;
