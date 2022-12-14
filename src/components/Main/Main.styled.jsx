import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;

  @media (min-width: 1200px) {
    padding: 50px 70px;
  }
`;
