import styled from 'styled-components';

export const AppWrapper = styled.div`
  width: 100%;

  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 0;
  padding-right: 0; */
  /* margin-left: 50px; */

  @media (min-width: 500px) {
    display: flex;
    flex-direction: row-reverse;
    width: 500px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;
