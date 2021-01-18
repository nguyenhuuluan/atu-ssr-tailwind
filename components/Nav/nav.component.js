import { useEffect } from 'react';
import styled from 'styled-components';
import NavLogo from './nav.logo.component';

const Input = styled.input`
  display: none;
  position: absolute;
  /* visibility: hidden; */
`;
const NavBar = styled.nav`
  color: #fff;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 42px;
  letter-spacing: 0.025em;
  width: 100%;
  position: fixed;
  z-index: 9999;
  padding: 30px 0;
  backdrop-filter: ${(props) => (props.blur ? `blur(${props.blur})` : 'none')};
  transition: all 0.3s ease;

  &.fixed {
    padding: 15px 0;
    background: crimson;
    & .nav-link-list li a:hover {
      color: #fff;
    }
  }
`;

const ToggleLabel = styled.label`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  upp :hover,
  :focus {
    background-color: rgba(55, 65, 81, 0.1);
    color: rgba(55, 65, 81, 0.7);
  }
  /* p-2 hover:text-gray-400 hover:bg-gray-700 hover:bg-opacity-10 rounded-full cursor-pointer */
`;
const NavLink = styled.ul`
  display: inline-block;
  list-style: none;
  & a {
    display: block;
    transition: color 0.3s ease;

    :hover {
      color: crimson;
    }
  }

  /* ${NavBar}.fixed
  &.fixed {
  } */
`;

const generateNavList = () => (
  <NavLink className="nav-link-list h-0 md:h-auto invisible opacity-0 md:visible md:opacity-100 flex-col md:flex-row md:inline-flex whitespace-nowrap md:ml-8 md:pr-8 md:space-x-8">
    <li>
      <a href="#a" className="menu-btn">
        Trang chủ
      </a>
    </li>
    <li>
      <a href="#a" className="menu-btn">
        Sản phẩm
      </a>
    </li>
    <li>
      <a href="#a" className="menu-btn">
        Liên hệ
      </a>
    </li>
    <li>
      <a href="/login" className="menu-btn">
        Đăng nhập
      </a>
    </li>
  </NavLink>
);

const handleDrawerToggle = (e) => {
  if (e.target.checked) {
    document.body.getElementsByClassName('nav-link-list')[0].classList.add('active');
    // document.body.getElementsByClassName('nav-link-list')[0].classList.remove('hidden');
  } else {
    document.body.getElementsByClassName('nav-link-list')[0].classList.remove('active');
    // document.body.getElementsByClassName('nav-link-list')[0].classList.add('hidden');
  }
};

const Nav = (props) => {
  const { color, blur, className } = props;
  // const navClass = `tracking-wider ${
  //   color === 'transparent' ? 'bg-transparent text-white' : 'bg-white shadow-xl bg-opacity-75'
  // }`;
  useEffect(() => {
    function handleMobileResize() {
      const ele = document.body.getElementsByClassName('is-mobile')[0];
      if (window.innerWidth > 768 && ele.checked) {
        ele.checked = false;
        document.body.getElementsByClassName('nav-link-list')[0].classList.remove('active');
      }
    }
    function handleWindowScroll() {
      if (window.scrollY > 20) document.body.getElementsByTagName('nav')[0].classList.add('fixed');
      else document.body.getElementsByTagName('nav')[0].classList.remove('fixed');
    }

    window.addEventListener('scroll', handleWindowScroll);
    window.addEventListener('resize', handleMobileResize);
    handleMobileResize();
    return () => {
      window.removeEventListener('resize', handleMobileResize);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  return (
    <NavBar id="nav-header" className={className} blur={blur}>
      <div id="nav-list" className="flex flex-start items-center flex-wrap">
        <NavLogo />

        <div className="flex md:hidden px-4">
          <ToggleLabel htmlFor="is-mobile" onClick={handleDrawerToggle}>
            <Input type="checkbox" id="is-mobile" className="is-mobile" />
            <i aria-hidden className="fas fa-bars" />
          </ToggleLabel>
        </div>
        {generateNavList()}
      </div>
    </NavBar>
  );
};

export default Nav;
