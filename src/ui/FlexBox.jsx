/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledFlexBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem 1rem;

  @media (min-width: 908px) {
    flex-direction: row;
  }
  & img {
    color: var(--color-brand-100);
  }
`;

function FlexBox({ children }) {
  return <StyledFlexBox className='flex-col gap-10'>{children}</StyledFlexBox>;
}

export default FlexBox;
