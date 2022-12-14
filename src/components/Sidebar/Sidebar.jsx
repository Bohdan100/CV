import { Contacts } from './Contacts';
import { TechSkills } from './TechSkills';
import { SoftScills } from './SoftScills';
import { Languages } from './Languages';

import { SidebarWrapper, UserPhoto } from './Sidebar.styled';
import UserImage from 'img/UserImage.png';

export const Sidebar = () => {
  return (
    <SidebarWrapper>
      <UserPhoto src={UserImage} alt="user photo" />
      <Contacts />
      <TechSkills />
      <SoftScills />
      <Languages />
    </SidebarWrapper>
  );
};
