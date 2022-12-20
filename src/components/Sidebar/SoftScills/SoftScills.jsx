import { nanoid } from 'nanoid';
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
      <SoftScillsTitle>Soft Scills</SoftScillsTitle>
      <SoftScillsList>
        {softSkills.map(skill => (
          <SoftScillsItem key={nanoid(5)}>
            <SoftScillsText>{skill}</SoftScillsText>
          </SoftScillsItem>
        ))}
      </SoftScillsList>
    </SoftScillsWrapper>
  );
};
