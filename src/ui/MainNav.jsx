import { FaHandHoldingMedical } from 'react-icons/fa';
import { GrProjects } from 'react-icons/gr';
import { HiMiniUserGroup } from 'react-icons/hi2';
import { IoCube } from 'react-icons/io5';
import { MdPhoneInTalk } from 'react-icons/md';
import { TbHomeFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function MainNav() {
  const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: fit-content;
    padding: 0.2rem 0;
  `;

  const StyledNavLink = styled(NavLink)`
    &:link {
      color: var(--color-grey-600);
      padding: 1.2rem;
      transition: all 0.3s;
    }

    & svg {
      width: 2.2rem;
      height: 2.2rem;
      color: var(--color-grey-400);
      transition: all 0.3s;
    }

    &:hover svg,
    &:active svg,
    &.active:link svg,
    &.active:visited svg {
      color: var(--color-brand-100);
      width: 2.4rem;
      height: 2.4rem;
    }
  `;
  return (
      <NavList>
        <StyledNavLink to='/home'>
          <TbHomeFilled />
        </StyledNavLink>

        <StyledNavLink to='/services'>
          <FaHandHoldingMedical />
        </StyledNavLink>

        <StyledNavLink to='/products'>
          <IoCube />
        </StyledNavLink>

        <StyledNavLink to='/projects'>
          <GrProjects />
        </StyledNavLink>

        <StyledNavLink to='/partners'>
          <HiMiniUserGroup />
        </StyledNavLink>

        <StyledNavLink to='/contact'>
          <MdPhoneInTalk />
        </StyledNavLink>
      </NavList>
  );
}

export default MainNav;
