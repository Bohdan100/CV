import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: ${p => p.theme.colors.white};
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.1);

  @media (min-width: 500px) {
    padding: 50px 70px;
  }
`;
