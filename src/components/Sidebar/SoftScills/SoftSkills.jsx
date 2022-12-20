import { nanoid } from 'nanoid';
import {
  SoftSkillsWrapper,
  SoftSkillsTitle,
  SoftSkillsList,
  SoftSkillsItem,
  SoftSkillsText,
} from './SoftSkills.styled';

import skills from 'data/skills';

export const SoftSkills = () => {
  const softSkills = skills.softSkills;
  return (
    <SoftSkillsWrapper>
      <SoftSkillsTitle>Soft Skills</SoftSkillsTitle>
      <SoftSkillsList>
        {softSkills.map(skill => (
          <SoftSkillsItem key={nanoid(5)}>
            <SoftSkillsText>{skill}</SoftSkillsText>
          </SoftSkillsItem>
        ))}
      </SoftSkillsList>
    </SoftSkillsWrapper>
  );
};
