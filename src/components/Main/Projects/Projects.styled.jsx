import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
  margin-bottom: 50px;
`;

export const ProjectsTitle = styled.h3`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 32px;
  line-height: ${p => p.theme.lineHeights.basic};
  color: ${p => p.theme.colors.black};
  margin-bottom: 10px;
`;

export const ProjectsList = styled.ol`
  padding: ${p => p.theme.space[0]};
  margin-left: 15px;
  color: ${p => p.theme.colors.orange};

  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const ProjectsItem = styled.li`
  margin: 0 0 10px;
  padding: ${p => p.theme.space[0]};
`;

export const ProjectLink = styled.a`
  @media (max-width: 500px) {
    margin-right: 3px;
  }

  display: block;
  margin-left: 0;
  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.orange};
  opacity: 0.75;

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

export const ProjectDescription = styled.p`
  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 3px;
  }

  margin-bottom: 10px;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.basic};
  color: ${p => p.theme.colors.black};
`;

export const ProjectTechnology = styled.p`
  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 3px;
  }

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.basic};
  color: ${p => p.theme.colors.black};
`;
