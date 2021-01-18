import { useEffect } from 'react';
import styled from 'styled-components';

const Input = styled.input`
  display: none;
  position: absolute;
  /* visibility: hidden; */
`;
const NavBar = styled.nav`
  font-size: 19px;
  font-weight: 400;
  line-height: 42px;
  //   color: #2c3241;
  width: 100%;
  position: fixed;
  z-index: 9999;
  backdrop-filter: ${(props) => (props.blur ? `blur(${props.blur})` : 'none')};

  & .nav-link-list {
    transition: height 0.56s cubic-bezier(0.52, 0.16, 0.24, 1);
    &.active {
      transition: 0.2s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.3s, opacity 0.2s cubic-bezier(0.52, 0.16, 0.52, 0.84) 0.3s;
      visibility: visible;
      opacity: 1;
      height: 100vh;
      width: 100%;
      text-align: right;
      padding: 0 1.5rem;

      & > a {
        :nth-of-type(1):before {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background: rgba(64, 64, 72, 0.2);
        }
        /* :after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background: #404048;
        } */
      }
    }
  }
`;

const ToggleLabel = styled.label`
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 50%;
  :hover {
    background-color: rgba(55, 65, 81, 0.1);
    color: rgba(55, 65, 81, 0.7);
  }
  /* p-2 hover:text-gray-400 hover:bg-gray-700 hover:bg-opacity-10 rounded-full cursor-pointer */
`;
const NavLink = styled.li``;

const generateNavList = () => (
  <NavLink className="nav-link-list h-0 md:h-auto invisible opacity-0 md:visible md:opacity-100 flex-col md:flex-row md:inline-flex whitespace-nowrap md:ml-10 md:pr-4 md:space-x-8">
    <a href="#a" className="block font-medium hover:text-gray-900">
      Product
    </a>
    <a href="#a" className="block font-medium hover:text-gray-900">
      Features
    </a>
    <a href="#a" className="block font-medium hover:text-gray-900">
      Marketplace
    </a>
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
  const { color, blur } = props;
  const navClass = `tracking-wider ${
    color === 'transparent' ? 'bg-transparent text-white' : 'bg-white shadow-xl bg-opacity-75'
  }`;
  useEffect(() => {
    function handleMobileResize() {
      const ele = document.body.getElementsByClassName('is-mobile')[0];
      if (window.innerWidth > 768 && ele.checked) {
        ele.checked = false;
        document.body.getElementsByClassName('nav-link-list')[0].classList.remove('active');
      }
    }
    window.addEventListener('resize', handleMobileResize);
    handleMobileResize();
    return () => window.removeEventListener('resize', handleMobileResize);
  }, []);

  return (
    <NavBar id="nav-header" className={navClass} blur={blur}>
      <div id="nav-list" className="flex flex-start items-center flex-wrap">
        <ul
          className="container flex flex-nowrap flex-1 whitespace-nowrap justify-between items-center px-4 mx-auto md:px-8"
          style={{ minHeight: '50px' }}
        >
          <li id="nav-logo" className="inline-flex items-center py-2">
            <a href="#logo" className="inline-flex">
              <img alt="logo" src="/img/logo.png" style={{ height: '41px', width: '41px' }} />
              <span className="pl-2">Creative Atu</span>
            </a>
            <a href="#logo">
              <span
                className="pl-3 ml-3 text-gray-500 hover:text-gray-900"
                style={{ borderLeft: '1px solid rgba(44, 50, 65, 0.2)' }}
              >
                Store
              </span>
            </a>
          </li>
        </ul>

        <ul className="flex md:hidden px-4">
          <li>
            <ToggleLabel htmlFor="is-mobile" onClick={handleDrawerToggle}>
              <Input type="checkbox" id="is-mobile" className="is-mobile" />
              <i aria-hidden className="fas fa-bars" />
            </ToggleLabel>
          </li>
        </ul>
        <ul className="flex items-center justify-center w-full md:w-auto">{generateNavList()}</ul>
      </div>
    </NavBar>
  );
};

export default Nav;
