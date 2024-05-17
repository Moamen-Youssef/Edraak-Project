import { FaSquareFacebook } from 'react-icons/fa6';
import { ImLinkedin } from 'react-icons/im';
import { RiInstagramFill } from 'react-icons/ri';
import styled from 'styled-components';

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  & svg {
    color: var(--color-grey-300);
    width: 2.2rem;
    height: 2.2rem;
  }
`;
function Socials() {
  return (
    <SocialsContainer>

      <FaSquareFacebook />
      <ImLinkedin />
      <RiInstagramFill />

    </SocialsContainer>
  );
}

export default Socials;
