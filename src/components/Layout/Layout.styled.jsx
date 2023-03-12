import styled from '@emotion/styled';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-width: 960px;
  height: 825px;
  margin: 0 auto;
  padding: 12px;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; ;
`;

export const Title = styled.h1`
  text-align: center;
`;
