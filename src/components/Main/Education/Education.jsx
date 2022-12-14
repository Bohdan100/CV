import {
  EducationWrapper,
  EducationTitle,
  EducationSpecialization,
  EducationOrganization,
  EducationPosition,
  EducationPeriod,
  Line,
  EducationList,
  EducationListItem,
} from './Education.styled';

export const Education = () => {
  return (
    <EducationWrapper>
      <EducationTitle>IT Education</EducationTitle>
      <div>
        <EducationSpecialization>
          Educational institution:
          <EducationOrganization>GoIT & Academy</EducationOrganization>
        </EducationSpecialization>
        <EducationSpecialization>
          Specialization:
          <EducationPosition>Full-Stack Developer</EducationPosition>
        </EducationSpecialization>
        <EducationPeriod>
          April 2022 - December 2022
          <Line> | </Line>
          Ukraine
        </EducationPeriod>
        <EducationList>
          <EducationListItem>
            Make individual and team projects with React.js, JavaScript, HTML5,
            CSS3.
          </EducationListItem>
          <EducationListItem>
            Connected and used different libraries in React-projects, like:
            React-Toolkit, RTK-Query, redux-persist, React-Router-DOM,
            react-query, react-use, styled-components, emotion, styled-system,
            formik, yup, react-avatar, react-icons, react-hot-toast,
            react-spinners, shortid, nanoid and others.
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
