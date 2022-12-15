import styled from 'styled-components';

export const ContactsWrapper = styled.aside`
  margin: 0;
  margin-bottom: 40px;
`;

export const ContactsTitle = styled.h3`
  padding: 0;
  margin-bottom: 20px;
  text-align: center;

  color: ${p => p.theme.colors.orange};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 24px;
  line-height: 27px;

  @media (min-width: 500px) {
    margin-bottom: 30px;
  }
`;

export const SocialNetworkList = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 5px;

  @media (min-width: 500px) {
    margin-left: 40px;
  }
`;

export const SocialNetworkLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  color: ${p => p.theme.colors.white};
  text-decoration: none;
  outline: none;
`;

// export const SocialNetworkIcon = styled.div`
//   background-color: ${p => p.theme.fontWeights.normal};
// `;

export const SocialNetworkLinkText = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 18px;
  line-height: 1.17;
  color: ${p => p.theme.colors.white};
`;

export const ContactsList = styled.ul`
  margin: 0 0 40px;
  padding: 0;
  list-style: none;
`;

export const ContactsListItem = styled.li`
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-bottom: 5px;

  @media (min-width: 500px) {
    margin-left: 40px;
  }
`;

export const ContactsLink = styled.a`
  color: ${p => p.theme.colors.white};
  text-decoration: none;
`;

export const EmailIcon = styled.span`
  margin-right: 10px;
  padding: 0;
`;

export const ContactsText = styled.span`
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: 16px;
  line-height: 1.17;
`;

export const TelIcon = styled.span`
  margin-right: 10px;
  padding: 0;
`;
