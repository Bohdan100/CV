import {
  UserWrapper,
  UserPosition,
  UserName,
  UserDescription,
} from './AboutMe.styled';

export const AboutMe = () => {
  return (
    <UserWrapper>
      <UserPosition>Junior React Developer</UserPosition>
      <UserName>Bohdan Orlovskyi</UserName>
      <UserDescription>
        I specialize in React and JavaScript programming, make projects in this
        direction and completed Full-stack developer courses at GoIT Academy.
        I'm aiming for a job as a React Developer.
      </UserDescription>
    </UserWrapper>
  );
};
