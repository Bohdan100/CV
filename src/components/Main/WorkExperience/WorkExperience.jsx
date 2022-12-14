import {
  WorkWrapper,
  WorkTitle,
  WorkPosition,
  WorkPeriod,
  Line,
  WorkList,
  WorkListItem,
} from './WorkExperience.styled';

export const WorkExperience = () => {
  return (
    <WorkWrapper>
      <WorkTitle>Work Experience</WorkTitle>
      <WorkPosition>Developer in Freelance (Front-End)</WorkPosition>
      <WorkPeriod>
        August 2022 - up to now
        <Line> | </Line> Ukraine
      </WorkPeriod>
      <WorkList>
        <WorkListItem>Website development from scratch.</WorkListItem>
        <WorkListItem>
          Completion of sites and support of ready sites.
        </WorkListItem>
        <WorkListItem>Landing sites to Wordpress.</WorkListItem>
        <WorkListItem>Website testing.</WorkListItem>
      </WorkList>
    </WorkWrapper>
  );
};
