import { MainWrapper } from './Main.styled';
import { AboutMe } from './AboutMe';
import { Projects } from './Projects';
import { WorkExperience } from './WorkExperience';
import { Education } from './Education';

export const Main = () => {
  return (
    <MainWrapper>
      <AboutMe />
      <Projects />
      <WorkExperience />
      <Education />
    </MainWrapper>
  );
};
