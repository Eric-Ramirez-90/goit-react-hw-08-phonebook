import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  font-weight: 700;
`;

export const Button = styled.button`
  margin: 0;
  padding: 5px 10px;

  font-size: 16px;

  border: none;
  border-radius: 5px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  cursor: pointer;

  :hover,
  :focus {
    background-color: red;
    color: #ffffff;
  }
`;
