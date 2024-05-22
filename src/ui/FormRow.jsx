/* eslint-disable react/prop-types */
import styled, { css } from 'styled-components';

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  gap: 0.8rem;
  padding: 1.2rem 0;
  ${(props) =>
    props.type === 'text-area' &&
    css`
      align-items: flex-start;
    `}
  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;
const Label = styled.label`
  font-weight: 600;
  text-transform: capitalize;
`;
const Error = styled.p`
  color: var(--color-red-700);
  font-size: smaller;
  font-weight: 600;
`;
const HiddenText = styled.p`
  color: transparent;

`;
function FormRow({ children, label, error, type }) {
  return (
    <StyledFormRow
      type={type}
      className='grid-cols-form sm:grid-cols-form-sm md:grid-cols-form-md lg:grid-cols-form-lg'
    >
      <Label htmlFor={children.props.id}>{label}</Label>
      {children}
      {error ? (
        <Error>{error}</Error>
      ) : (
        <HiddenText>Hidden Hidden Hidden Hid</HiddenText>
      )}
    </StyledFormRow>
  );
}

export default FormRow;
