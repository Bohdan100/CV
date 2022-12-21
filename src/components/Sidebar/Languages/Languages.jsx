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
          <LanguagesText>English: Intermediate</LanguagesText>
        </LanguagesItem>
        <LanguagesItem>
          <LanguagesText>Ukranian, Russian: Native</LanguagesText>
        </LanguagesItem>
      </LanguagesList>
    </LanguagesWrapper>
  );
};
