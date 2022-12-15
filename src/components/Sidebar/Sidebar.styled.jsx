import styled from 'styled-components';

export const SidebarWrapper = styled.aside`
  margin: 0;
  background-color: #1e2939;
  padding: 20px 0;

  @media (min-width: 500px) {
    padding-top: 50px;
    width: 400px;
  }
`;

export const UserPhoto = styled.img`
  width: 210px;
  height: 210px;
  border-radius: 50%;

  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 250px;
    height: 240px;

    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
  }
`;
