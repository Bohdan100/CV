import styled from 'styled-components';

export const EducationWrapper = styled.div`
  margin-bottom: 10px;
`;

export const EducationTitle = styled.h3`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  color: ${p => p.theme.colors.black};
  font-size: 26px;
`;

export const EducationSpecialization = styled.h4`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
`;

export const EducationOrganization = styled.span`
  margin-left: 10px;
  color: ${p => p.theme.colors.orange};
`;

export const EducationPosition = styled.span`
  margin-left: 10px;
  color: ${p => p.theme.colors.orange};
`;

export const EducationPeriod = styled.p`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 13px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.greyFirst};
  margin-bottom: 10px;
`;

export const EducationList = styled.ul`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  padding: 0;
  margin-left: 15px;
`;

export const EducationListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.bold};
  color: ${p => p.theme.colors.greySecond};
`;
