import styled from 'styled-components';

export const LanguagesWrapper = styled.div`
  margin-left: 40px;
`;

export const LanguagesTitle = styled.h3`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 24px;
  line-height: 27px;
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: 10px;
`;

export const LanguagesList = styled.ul`
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[0]};
  margin-left: 17px;
`;

export const LanguagesItem = styled.li`
  color: ${p => p.theme.colors.orange};
`;

export const LanguagesText = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 24px;
`;
