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

  @media (max-width: 500px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export const ProjectsItem = styled.li`
  margin: 0 0 10px;
  padding: ${p => p.theme.space[0]};

  @media (min-width: 500px) {
    display: inline-flex;
    align-items: baseline;
    gap: 10px;
  }
`;

export const ProjectLink = styled.a`
  @media (max-width: 500px) {
    margin-left: 0;
    margin-right: 3px;
  }

  margin-left: 10px;
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

export const ProjectBracket = styled.span`
  color: ${p => p.theme.colors.black};
`;

export const ProjectDescription = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.basic};
  color: ${p => p.theme.colors.black};
`;
