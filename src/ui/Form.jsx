/* eslint-disable react/prop-types */
import styled from 'styled-components';

const StyledForm = styled.form`
  border: solid 1px var(--color-grey-300);
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.5rem;
`;

function Form({ children, onSubimt }) {
  return (
    <StyledForm onSubmit={onSubimt} className='w-[100%] sm:w-[80%]'>
      {children}
    </StyledForm>
  );
}

export default Form;
