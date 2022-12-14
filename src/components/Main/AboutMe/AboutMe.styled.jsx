import styled from 'styled-components';

export const UserWrapper = styled.div`
  margin-bottom: 40px;
`;

export const UserPosition = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 40px;
  line-height: 1.17;
  color: ${p => p.theme.colors.orange};
  margin-bottom: 20px;
`;

export const UserName = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 45px;
  line-height: 1.17;
  color: ${p => p.theme.colors.black};
  margin-bottom: 25px;
`;

export const UserDescription = styled.p`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 1.05;
  color: ${p => p.theme.colors.greySecond};
  width: 450px;
`;
