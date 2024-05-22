import styled from "styled-components";

const Input = styled.input`
border: 1px solid var(--color-grey-200);
background-color: var(--color-grey-50);
border-radius: 10px;
padding: 0.5rem 0.9rem;
box-shadow: var(--shadow-sm);
width: 100%;
max-width:15rem;
&:not([type='checkbox']){
    min-width: 18rem;
}
color: var(--color-grey-700);
&::placeholder{
    font-weight: 600;
    font-size: smaller;
}
`;

export default Input;
