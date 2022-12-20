import styled from 'styled-components';

export const SoftSkillsWrapper = styled.aside`
  margin-left: 40px;
  margin-bottom: 45px;

  @media (min-width: 500px) {
    margin-left: 30px;
  }

  @media (min-width: 768px) {
    margin-left: 40px;
  }
`;

export const SoftSkillsTitle = styled.h3`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 24px;
  line-height: 27px;
  margin-top: 0;
  margin-bottom: 10px;
`;

export const SoftSkillsList = styled.ul`
  color: ${p => p.theme.colors.white};
  padding: 0;
  margin-left: 17px;
`;

export const SoftSkillsItem = styled.li`
  color: ${p => p.theme.colors.orange};
`;

export const SoftSkillsText = styled.span`
  color: ${p => p.theme.colors.white};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 24px;
`;
