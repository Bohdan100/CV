import {
  TechSkillsWrapper,
  TechSkillsTitle,
  TechSkillsList,
  TechSkillsItem,
  TechSkillsText,
} from './TechSkills.styled';

import skills from 'data/skills';

export const TechSkills = () => {
  const techSkills = skills.techSkills;
  return (
    <TechSkillsWrapper>
      <TechSkillsTitle>Tech Skills</TechSkillsTitle>
      <TechSkillsList>
        {techSkills.map(skill => (
          <TechSkillsItem>
            <TechSkillsText>{skill}</TechSkillsText>
          </TechSkillsItem>
        ))}
      </TechSkillsList>
    </TechSkillsWrapper>
  );
};
