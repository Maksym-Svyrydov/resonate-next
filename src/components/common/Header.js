import { useRouter } from 'next/router';
import { useState } from 'react';
// import debounce from 'lodash/debounce';

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
  // const [scrollTop, setScrollTop] = useState(0);
  const navigation = [
    { id: 1, title: 'Main', path: '/' },
    { id: 2, title: 'Blog', path: '/blog' },
    { id: 3, title: 'Privacy', path: '/privacy' },
  ];
  // useEffect(() => {
  //   console.log('высота страницы', document.documentElement.offsetHeight);
  // });
  function handleNav() {
    setShownavMenu(!showNavMenu);
  }
  // useEffect(() => {
  //   const handleScroll = (event) => {
  //     setScrollTop(window.scrollY);
  //   };

  //   window.addEventListener('scroll', debounce(handleScroll, 300));

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // });
  // console.log('scrollTop:', scrollTop);
  // console.log('высота страницы', document.documentElement.offsetHeight);
  // console.dir(document);
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
