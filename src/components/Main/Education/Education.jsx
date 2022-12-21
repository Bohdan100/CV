import {
  EducationWrapper,
  EducationTitle,
  EducationSpecialization,
  EducationOrganization,
  EducationPosition,
  EducationPeriod,
  EducationList,
  EducationListItem,
} from './Education.styled';

export const Education = () => {
  return (
    <EducationWrapper>
      <EducationTitle>Education</EducationTitle>
      <div>
        <EducationSpecialization>
          Educational institution:
          <EducationOrganization>GoIT & Academy</EducationOrganization>
        </EducationSpecialization>
        <EducationSpecialization>
          Specialization:
          <EducationPosition>Full-Stack Developer</EducationPosition>
        </EducationSpecialization>
        <EducationPeriod>April 2022 - December 2022</EducationPeriod>
        <EducationList>
          <EducationListItem>
            Make individual and team projects with React, JavaScript, HTML5,
            CSS3.
          </EducationListItem>
          <EducationListItem>
            Make individual projects with React Native.
          </EducationListItem>
          <EducationListItem>
            Connected and used different libraries in React-projects, like:
            Redux-Toolkit, RTK-Query, redux-persist, React Router, react-query,
            react-use, styled-components, emotion, styled-system, formik, yup,
            react-avatar, react-icons, react-hot-toast, react-spinners, shortid,
            nanoid and others.
          </EducationListItem>
          <EducationListItem>
            Connected and used JS and CSS libraries in projects, like: Axios,
            Bootstrap, Lozad.js, AOS, Slick, SimpleLightbox, date-fns, template
            engine Handlebars and others. Learned bundlers Webpack, Parcel; used
            Git, GitHub in projects.
          </EducationListItem>
          <EducationListItem>
            In React-projects worked with authentication, http-requests and
            response, redux-methods, routes, hooks, classes, functions,
            components and styling.
          </EducationListItem>
        </EducationList>
      </div>
    </EducationWrapper>
  );
};
