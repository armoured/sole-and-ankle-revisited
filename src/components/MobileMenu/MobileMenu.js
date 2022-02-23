/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, WEIGHTS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
      <StyledDialogOverlay
        isOpen={isOpen}
        onDismiss={onDismiss}
        role="dialog"
        aria-modal={true}
      >
        <StyledDialogContent
          aria-label="Navigation Dialog"
        >
          
          <StyledButton onClick={onDismiss}>
            <Icon id="close" size="24px"/>
            <VisuallyHidden>Close Navigation Dialog</VisuallyHidden>
          </StyledButton>
          <ContentWrapper>
            <Side />
            <Nav>
              <NavLink href="/sale" active>Sale</NavLink>
              <NavLink href="/new">New&nbsp;Releases</NavLink>
              <NavLink href="/men">Men</NavLink>
              <NavLink href="/women">Women</NavLink>
              <NavLink href="/kids">Kids</NavLink>
              <NavLink href="/collections">Collections</NavLink>
            </Nav>
            <LastSide>
              <Footer>
                <FooterLink href="/terms">Terms and Conditions</FooterLink>
                <FooterLink href="/privacy">Privacy Policy</FooterLink>
                <FooterLink href="/contact">Contact Us</FooterLink>
              </Footer>
            </LastSide>
          </ContentWrapper>
        </StyledDialogContent>
      </StyledDialogOverlay>
  );
};

export default MobileMenu;

const StyledDialogOverlay = styled(DialogOverlay)`
  background: hsla(220, 5%, 40%, 0.8);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;  
`;

const StyledDialogContent = styled(DialogContent)`
  width: 300px;
  position: absolute;
  top: 0;
  right: 0;
  background: ${COLORS.white};
  height: 100%;

  // When the screen is too small just let the content cover the page
  @media (max-width: 300px) {
    width: 100%;
  }
`;

const StyledButton = styled(UnstyledButton)`
  position: absolute;
  right: 0;
  margin-top: 26px;
  margin-right: 16px;
`;

const Side = styled.div`
  flex: 1;
`;

const LastSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 32px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const NavLink = styled.a`
  font-weight: ${WEIGHTS.medium};
  font-size: ${18/16}rem;
  line-height: ${21/16}rem;
  color: ${COLORS.gray[900]};
  text-decoration: none;
  text-transform: uppercase;

  ${p => p.active && 
    `
      color: ${COLORS.secondary};
    `
  }

  &:hover {
    text-decoration: revert;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 32px;
`;

const FooterLink = styled.a`
  font-weight: ${WEIGHTS.normal};
  font-size: ${14/16}rem;
  line-height: ${16/16}rem;
  color: ${COLORS.gray[700]};
  text-decoration: none;

  &:hover {
    text-decoration: revert;
  }
`;
