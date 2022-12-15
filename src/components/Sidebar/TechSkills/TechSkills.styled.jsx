import styled from 'styled-components';

export const TechSkillsWrapper = styled.aside`
  margin-left: 40px;
  margin-bottom: 45px;
`;

export const TechSkillsTitle = styled.h3`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 24px;
  line-height: 27px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const TechSkillsList = styled.ul`
  color: ${p => p.theme.colors.white};
  padding: 0;
  margin-left: 17px;
  list-style: inside;
`;

export const TechSkillsItem = styled.li`
  color: ${p => p.theme.colors.orange};
`;

export const TechSkillsText = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 24px;
`;
