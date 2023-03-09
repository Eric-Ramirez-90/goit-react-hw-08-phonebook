import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 26px;
  max-width: 600px;
  margin: 0 auto;
  padding: 16px;

  background-color: rgb(128, 128, 128, 0.9);

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;

export const Title = styled.h1`
  text-align: center;
`;
