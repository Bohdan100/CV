import { Contacts } from './Contacts';
import { TechSkills } from './TechSkills';
import { SoftSkills } from './SoftSkills';
import { Languages } from './Languages';

import { SidebarWrapper, UserPhoto } from './Sidebar.styled';
import UserImage from 'img/UserImage.png';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <UserPhoto src={UserImage} alt="user photo" />
      <Contacts />
      <TechSkills />
      <SoftSkills />
      <Languages />
    </SidebarWrapper>
  );
};
