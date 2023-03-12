import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: white;
  font-size: 20px;

  &.active {
    color: rgb(255, 0, 0);
  }
`;
