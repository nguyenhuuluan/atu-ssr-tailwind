import { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import NavLogo from './nav.logo.component';

const Input = styled.input`
  display: none;
  position: absolute;
  /* visibility: hidden; */
`;

const NavBar = styled.nav`
  color: ${({ color }) => color};
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 42px;
  letter-spacing: 0.025em;
  width: 100%;
  position: ${({ fixed }) => (fixed ? 'fixed' : 'absolute')};
  z-index: 100;
  padding: 0 2em;
  padding-bottom: ${({ background }) => (background !== 'transparent' ? 0 : '1em')};
  box-shadow: ${({ background }) =>
    background !== 'transparent' ? '0 4px 18px 0px rgba(0, 0, 0, 0.12), 0 7px 10px -5px rgba(0, 0, 0, 0.15)' : 'none'};
  background: ${({ background }) => background};
  backdrop-filter: ${({ blur }) => (blur ? `blur(${blur})` : 'none')};
  transition: all 0.3s ease;

  &.fixed {
    position: fixed;
    padding-bottom: 0;
    background: ${({ fixedBackground }) => fixedBackground};
    opacity: ${({ opacity }) => opacity};
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
  /* display: inline-block; */
  /* list-style: none; */
  & li {
  }

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
  <NavLink className="nav-link-list fixed md:static h-screen md:h-auto bg-black md:bg-transparent top-0 -left-full md:top-auto md:left-auto w-full md:w-auto inline-flex flex-col items-center justify-center md:flex-row flex-wrap space-x-0 md:space-x-4 space-y-4 md:space-y-0">
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
  const { fixed, className } = props;
  // const navClass = `tracking-wider ${
  //   color === 'transparent' ? 'bg-transparent text-white' : 'bg-white shadow-xl bg-opacity-75'
  // }`;
  console.log(fixed);
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
    <NavBar id="nav-header" className={className} {...props}>
      <div id="nav-list" className="container mx-auto flex items-center justify-between">
        {/* <div id="nav-list" className="flex flex-start items-center flex-wrap"> */}

        {/* Navigation Logo */}
        <div className="inline-block">
          <NavLogo />
        </div>

        {/* Navigation List Link */}
        <div className="md:inline-block text">{generateNavList()}</div>

        {/* Navigation Toggle Mobile Icon */}
        <div className="inline-block md:hidden">
          <div className="flex md:hidden">
            <ToggleLabel htmlFor="is-mobile" onClick={handleDrawerToggle}>
              <Input type="checkbox" id="is-mobile" className="is-mobile" />
              <i aria-hidden className="fas fa-bars" />
            </ToggleLabel>
          </div>
        </div>
      </div>
    </NavBar>
  );
};

Nav.propTypes = {
  className: PropTypes.string,
  textColor: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  blur: PropTypes.string,
  opacity: PropTypes.number,
  fixed: PropTypes.bool,
  fixedBackground: PropTypes.string,
  fixedColor: PropTypes.string,
};

Nav.defaultProps = {
  className: 'PropTypes.string',
  color: '#fff',
  fixedColor: '#fff',
  fixed: false,
  opacity: 1,
  background: 'transparent',
  fixedBackground: 'white',
};

export default Nav;
