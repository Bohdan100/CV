import {
  SoftScillsWrapper,
  SoftScillsTitle,
  SoftScillsList,
  SoftScillsItem,
  SoftScillsText,
} from './SoftScills.styled';

import skills from 'data/skills';

export const SoftScills = () => {
  const softSkills = skills.softSkills;
  return (
    <SoftScillsWrapper>
      <SoftScillsTitle>SoftScills</SoftScillsTitle>
      <SoftScillsList>
        {softSkills.map(skill => (
          <SoftScillsItem>
            <SoftScillsText>{skill}</SoftScillsText>
          </SoftScillsItem>
        ))}
      </SoftScillsList>
    </SoftScillsWrapper>
  );
};
