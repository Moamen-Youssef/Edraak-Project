import styled, { css } from 'styled-components';

/* eslint-disable react/prop-types */
const StyledDescription = styled.div`
  flex-direction: column;
  gap: 1rem;
  height: fit-content;
  margin: auto;
  padding: 0.5rem;

  ${props => props.lang === "en" && css`
    direction: ltr;
  `}
  & h1 {
    color: var(--color-brand-200);
    font-size: 3rem;
    font-weight: 600;
  }
  & h4 {
    color: var(--color-grey-600);
    font-weight: 600;
    font-size: 1.5rem;
  }
  & p {
    font-size: 1.4rem;
    font-weight: 400;
    @media (min-width: 1000px ){
      font-size: 1.7rem;
    }
  }
`;
function Description({ children, className,lang }) {
  return (
    <StyledDescription lang={lang} className={`${className} w-[95%]  md:w-[80%] lg:w-[50%] flex`}>
      {children}
    </StyledDescription>
  );
}

export default Description;
