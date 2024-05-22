import styled, { css } from 'styled-components';
import FlexBox from '../ui/FlexBox';
import { appContent } from '../content/appContent';
import { useContext } from 'react';
import { LanguageContextAPI } from '../contexts/LanguageContext';

const Container = styled.div`
  padding: 2rem;
  ${(props) =>
    props.lang === 'en' &&
    css`
      direction: ltr;
    `}
`;
const Text = styled.div`
  padding: 0 0.5rem;
  color: var(--color-grey-700);
  & h1 {
    font-weight: 700;
    color: var(--color-brand-100);
    padding: 1rem 0.2rem;
  }
`;
function HomePage() {
  const { appLang } = useContext(LanguageContextAPI);
  const { homePageContent } = appContent();
  return (
    <Container lang={appLang}>
      <FlexBox>
        <Text>
          <h1 className='lg:text-4xl'>{homePageContent.title[appLang]}</h1>
          <p className='md:w-[80%] lg:text-4xl'>
            {homePageContent.description[appLang]}
          </p>
        </Text>
        <img
          src='/Edraak-Project/cloud-data.png'
          alt='software'
          className='h-[45vh] w-[100%] sm:w-[40rem] sm:h-[30vh] md:w-[55%] lg:w-[100%] lg:h-[54vh]'
        />
      </FlexBox>
    </Container>
  );
}

export default HomePage;
