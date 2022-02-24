import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <UnstyledButton>
            <Icon id="shopping-bag" color={COLORS.gray[900]} size="24px"/>
            <VisuallyHidden>Shopping Cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" color={COLORS.gray[900]} size="24px"/>
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" color={COLORS.gray[900]} size="24px"/>
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </IconWrapper>
        <Side />
      </MainHeader>


      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
    justify-content: space-between;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    10.6vw - 5.5rem,
    3.5rem
  );
  margin: 0px 48px;
  margin-right: 0px;

  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const IconWrapper = styled.div`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 32px;
    margin-right: -3px;
    padding-top: 1px;
    & + ${Side} {
      display: none;
    }
  }

  @media ${QUERIES.phoneAndDown} {
    gap: 16px;
    margin-right: 0;
  }
`;

export default Header;
