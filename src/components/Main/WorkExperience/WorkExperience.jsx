import {
  WorkWrapper,
  WorkTitle,
  WorkPosition,
  WorkPeriod,
  Line,
  WorkText,
  WorkList,
  WorkListItem,
} from './WorkExperience.styled';

export const WorkExperience = () => {
  return (
    <WorkWrapper>
      <WorkTitle>Work experience</WorkTitle>
      <WorkPosition>Developer in Freelance (Front-End)</WorkPosition>
      <WorkPeriod>
        August 2022 - up to now
        <Line> | </Line> Ukraine
      </WorkPeriod>
      <WorkText>Responsibilities:</WorkText>
      <WorkList>
        <WorkListItem>Completion of sites components</WorkListItem>
        <WorkListItem>
          Website development: writing logic and making adaptive layout.
        </WorkListItem>
        <WorkListItem>Technical support of ready sites.</WorkListItem>
      </WorkList>
    </WorkWrapper>
  );
};
