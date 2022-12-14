import { ImLinkedin, ImGithub } from 'react-icons/im';
import {
  HiMailOpen,
  HiOutlinePhoneIncoming,
  HiOutlineLocationMarker,
} from 'react-icons/hi';
import { SiTelegram } from 'react-icons/si';
import {
  ContactsWrapper,
  ContactsTitle,
  MobileUserName,
  MobileUserPosition,
  SocialNetworkList,
  SocialNetworkLink,
  SocialNetworkLinkText,
  //////////////////////
  ContactsList,
  ContactsListItem,
  ContactsLink,
  EmailIcon,
  TelIcon,
  ContactsText,
  LocationText,
} from './Contacts.styled';

export const Contacts = () => {
  return (
    <ContactsWrapper>
      <MobileUserPosition>Junior React Developer</MobileUserPosition>
      <MobileUserName>Bohdan Orlovskyi</MobileUserName>

      <ContactsTitle>Contacts:</ContactsTitle>

      <SocialNetworkList>
        <SocialNetworkLinkText>My profiles:</SocialNetworkLinkText>
        <SocialNetworkLink
          href="https://www.linkedin.com/in/bohdan-orlovskiy/"
          lang="en"
          rel="noopener noreferrer"
        >
          <ImLinkedin size={26} />
        </SocialNetworkLink>

        <SocialNetworkLink
          href="https://github.com/Bohdan100"
          lang="en"
          rel="noopener noreferrer"
        >
          <ImGithub size={26} />
        </SocialNetworkLink>

        <SocialNetworkLink
          href="https://t.me/Bogdan_info"
          lang="en"
          rel="noopener noreferrer"
        >
          <SiTelegram size={28} />
        </SocialNetworkLink>
      </SocialNetworkList>

      <ContactsList>
        <ContactsListItem>
          <ContactsLink href="mailto:b.orlovskiy@gmail.com" lang="en">
            <EmailIcon>
              <HiMailOpen size={24} />
            </EmailIcon>
            <ContactsText>b.orlovskiy@gmail.com</ContactsText>
          </ContactsLink>
        </ContactsListItem>

        <ContactsListItem>
          <ContactsLink href="tel:+380969212317">
            <TelIcon>
              <HiOutlinePhoneIncoming size={24} />
            </TelIcon>
            <ContactsText>+38 099 521 51 75</ContactsText>
          </ContactsLink>
        </ContactsListItem>

        <ContactsListItem>
          <HiOutlineLocationMarker size={28} />{' '}
          <LocationText> Odessa | Ukraine</LocationText>
        </ContactsListItem>
      </ContactsList>
    </ContactsWrapper>
  );
};
