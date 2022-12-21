import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsList,
  ProjectsItem,
  ProjectLink,
  ProjectTechnology,
  ProjectDescription,
} from './Projects.styled';

import projects from 'data/projects';

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {projects.map(({ id, name, href, description, technology }) => (
          <ProjectsItem key={id}>
            <ProjectLink href={href}>{name}: (link)</ProjectLink>
            <ProjectDescription>{description} </ProjectDescription>
            <ProjectTechnology>{technology}</ProjectTechnology>
          </ProjectsItem>
        ))}
      </ProjectsList>
    </ProjectsWrapper>
  );
};
