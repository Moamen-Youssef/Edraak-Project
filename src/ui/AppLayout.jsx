import styled, { css } from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import MainNav from './MainNav';
import { Outlet, useLocation } from 'react-router-dom';
import Logo from './Logo';
import Alerts from '../pages/Alerts';
import Socials from './Socials';
import { Container } from 'postcss';

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 7.8rem 1fr;
  height: 100vh;
  grid-template-rows: auto 1fr 2.5fr;
  width:100%;

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
        background-color: var(--color-white);
        padding: 4rem;
        gap: 0.1rem;

        & h1 {
          color: var(--color-grey-500);
          font-size: 5rem;
          transform: translateX(-50%);
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
  width: 100%;
`;


const Separator = styled.span`
  height: 38%;
  border: solid 1.5px;
  transition: ease 0.3s;
  margin: 2rem 0;
`;

function AppLayout() {
  const location = useLocation();
   const pathname = location.pathname;

  return (
    <StyledAppLayout>
      <GlobalStyles />

      <Sidebar pathname={pathname.replace('/', '')}>
        <Logo />
        <MainNav />
        <Separator />
        <Socials />
      </Sidebar>

      <Main>
        <Outlet />
        {/* <Alerts>
         <img src='../public/project-1.jpg' alt='project'/>
         <img src='../public/project-2.jpg' alt='project'/>
         <img src='../public/project-3.jpg' alt='project'/>
         <img src='../public/project-4.jpg' alt='project'/>
         <img src='../public/project-5.jpg' alt='project'/>
        </Alerts> */}
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
