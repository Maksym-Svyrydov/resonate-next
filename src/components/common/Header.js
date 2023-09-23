'use client';
import Link from 'next/link';

import { HeaderSection, NavSection, ButtonMenu } from './Header.styled';
import Logo from './Logo';
import { useState } from 'react';
const Header = () => {
  const [showNavMenu, setShownavMenu] = useState(false);
  function handleNav() {
    setShownavMenu(!showNavMenu);
  }
  return (
    <HeaderSection>
      <Logo />
      <NavSection className={showNavMenu ? 'showNav' : ''}>
        <Link href="/">
          <span>Main</span>
        </Link>
        <Link href="/blog">Blog</Link>
        <Link href="/privacy">Privacy</Link>
      </NavSection>
      <ButtonMenu
        id="humbergButton"
        onClick={handleNav}
        className={showNavMenu ? 'showNav' : ''}
      >
        <span></span>
        <span></span>
        <span></span>
      </ButtonMenu>
    </HeaderSection>
  );
};

export default Header;
