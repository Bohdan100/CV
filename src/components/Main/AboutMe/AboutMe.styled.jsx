import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin-bottom: 40px;
`;

export const UserPosition = styled.h2`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;

  @media (min-width: 500px) {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 40px;
    line-height: 1.17;
    color: ${p => p.theme.colors.orange};
    margin-bottom: 20px;
    opacity: 1;
    width: auto;
    height: auto;
  }
`;

export const UserName = styled.h1`
  width: 0;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;

  @media (min-width: 500px) {
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: 45px;
    line-height: 1.17;
    color: ${p => p.theme.colors.black};
    margin-bottom: 25px;
    opacity: 1;
    width: auto;
    height: auto;
  }
`;

export const UserDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.greySecond};
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 1200px) {
    padding: 0;
    width: 480px;
  }
`;
