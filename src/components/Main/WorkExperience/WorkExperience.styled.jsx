import styled from 'styled-components';

export const WorkWrapper = styled.div`
  margin-bottom: 45px;
`;

export const WorkTitle = styled.h3`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  color: ${p => p.theme.colors.black};
  font-size: 26px;
`;

export const WorkPosition = styled.h4`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
  margin-bottom: 10px;
`;

export const WorkPeriod = styled.p`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 13px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.greyFirst};
  margin-bottom: 10px;
`;

export const Line = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.black};
`;

export const WorkList = styled.ul`
  @media (max-width: 500px) {
    padding-left: 20px;
  }

  padding: ${p => p.theme.space[0]};
  margin-left: 15px;
`;

export const WorkListItem = styled.li`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 14px;
  line-height: ${p => p.theme.lineHeights.bold};
  color: ${p => p.theme.colors.greySecond};
`;
