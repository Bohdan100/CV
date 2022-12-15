import {
  ProjectsWrapper,
  ProjectsTitle,
  ProjectsList,
  ProjectsItem,
  ProjectLink,
  ProjectBracket,
  ProjectDescription,
} from './Projects.styled';

import projects from 'data/projects';

export const Projects = () => {
  return (
    <ProjectsWrapper>
      <ProjectsTitle>Projects</ProjectsTitle>
      <ProjectsList>
        {projects.map(({ id, name, href, description }) => (
          <ProjectsItem key={id}>
            <ProjectLink href={href}>{name}</ProjectLink>
            <ProjectBracket>[</ProjectBracket>
            <ProjectDescription>{description} </ProjectDescription>
            <ProjectBracket>]</ProjectBracket>
          </ProjectsItem>
        ))}
      </ProjectsList>
    </ProjectsWrapper>
  );
};
