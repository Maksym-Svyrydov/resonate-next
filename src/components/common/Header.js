import Link from 'next/link';
import { useRouter } from 'next/router';

import { useState } from 'react';

import Logo from './Logo';
import {
  HeaderSection,
  NavSection,
  NavLink,
  ButtonMenu,
} from './Header.styled';

const Header = () => {
  const { pathname } = useRouter();
  const [showNavMenu, setShownavMenu] = useState(false);
  const navigation = [
    { id: 1, title: 'Main', path: '/' },
    { id: 2, title: 'Blog', path: '/blog' },
    { id: 3, title: 'Privacy', path: '/privacy' },
  ];
  function handleNav() {
    setShownavMenu(!showNavMenu);
  }
  return (
    <HeaderSection>
      <Logo />
      <NavSection className={showNavMenu ? 'showNav' : null}>
        {navigation.map(({ id, title, path }) => (
          <NavLink
            key={id}
            href={path}
            className={pathname === path ? 'active' : null}
          >
            {title}
          </NavLink>
        ))}
      </NavSection>
      <ButtonMenu
        id="humbergButton"
        onClick={handleNav}
        className={showNavMenu ? 'showNav' : null}
      >
        <span></span>
        <span></span>
        <span></span>
      </ButtonMenu>
    </HeaderSection>
  );
};

export default Header;
