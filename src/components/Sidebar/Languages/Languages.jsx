import {
  LanguagesWrapper,
  LanguagesTitle,
  LanguagesList,
  LanguagesItem,
  LanguagesText,
} from './Languages.styled';

export const Languages = () => {
  return (
    <LanguagesWrapper>
      <LanguagesTitle>Languages</LanguagesTitle>
      <LanguagesList>
        <LanguagesItem>
          <LanguagesText>English: Limited Working</LanguagesText>
        </LanguagesItem>
        <LanguagesItem>
          <LanguagesText>Ukranian, Russian: Full Professional</LanguagesText>
        </LanguagesItem>
      </LanguagesList>
    </LanguagesWrapper>
  );
};
