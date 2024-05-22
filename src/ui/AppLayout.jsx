import styled, { css } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import MainNav from './MainNav';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Socials from './Socials';
import { Toaster } from 'react-hot-toast';
import { useContext } from 'react';
import { LanguageContextAPI } from '../contexts/LanguageContext';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 7.8rem 1fr;
  height: 100vh;
  grid-template-rows: auto 1fr 2.5fr;
  width: 100%;
`;

const Sidebar = styled.aside`
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;

  & div:not(:last-child) {
    padding: 0.2rem 0.4rem;
    margin: 0.2rem 0;
    border-radius: 5px;
    transition: ease 0.3s;
    gap: 0.5rem;
    background-color: var(--color-grey-100);

    & h1 {
      color: var(--color-grey-700);
      font-size: unset;
      transition: transform 0.3s ease, font-size 0.5s ease;
      transform: translateX(0);
    }

    & svg {
      width: unset;
      height: unset;
      transition: transform 0.3s ease;
      transform: translateX(0);
      color: var(--color-grey-400);
    }

    ${(props) =>
      (props.pathname === 'home' || props.pathname === 'contact') &&
      css`
        position: absolute;
        top: 1.5%;
        left: 80%;
        transform: translate(-80%, 1.5%);
        padding: 4rem;
        gap: 0.1rem;
        ${props => props.lang === "en" && css`
        left: 20%;
        top: 3.5%;
        transform: translate(-20%, -3.5%);
        background-color: transparent;
        `}

        & h1 {
          color: var(--color-grey-500);
          font-size: 5rem;
          transform: translateX(-50%);
          ${props => props.lang === "en" && css`
  
        transform: translateX(-25%);
        `}
        }

        & svg {
          width: 3rem;
          height: 3rem;
          color: var(--color-brand-100);
          transform: translateX(-50%);
        }
      `}
    ${(props) =>
      props.pathname === 'contact' &&
      css`
        top: 1.5%;
        left: 50%;
        transform: translate(-50%, 1.5%);
      `}
  }
`;

const Main = styled.main`
  grid-row: 3 / -1;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 78vh;
  overflow-y: auto;
`;

const Separator = styled.span`
  height: 38%;
  border: solid 1.5px;
  transition: ease 0.3s;
  margin: 2rem 0;
`;

const Button = styled.button`
  position: fixed;
  top: 1%;
  left: 2%;
  padding: 1rem 2rem;
  color: var(--color-brand-100);
  background-color: var(--color-grey-50);
  font-weight: 700;
  direction: rtl;
`;
function AppLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const { appLang, toggleLanguage } = useContext(LanguageContextAPI);

  return (
    <StyledAppLayout>
      <Button onClick={() => toggleLanguage()}>
        {appLang === 'ar' ? 'English' : 'العربية'}
      </Button>
      <Toaster
        gutter={12}
        containerStyle={{ margin: '8px' }}
        position='top-center'
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 4000 },
          style: {
            fontSize: '16px',
            padding: '16px 24px',
            maxWidth: '500px',
            backgroundColor: 'var(--color-grey-0)',
            color: 'var(--color-grey-700)',
          },
        }}
      />
      <GlobalStyles />

      <Sidebar lang={appLang} pathname={pathname.replace('/', '')}>
        <Logo />
        <MainNav />
        <Separator />
        <Socials />
      </Sidebar>

      <Main className='w-[98%] sm:w-[95%] md:w-[99%]'>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
