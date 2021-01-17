import styled from 'styled-components';

const NavBar = styled.nav`
  font-size: 19px;
  font-weight: 400;
  line-height: 42px;
  //   color: #2c3241;
`;

const Nav = (props) => {
  const { color } = props;

  const navClass = `w-full z-100 tracking-wider fixed flex flex-start items-center p-0 ${
    color === 'transparent' ? 'bg-transparent text-white' : 'bg-white shadow-xl'
  }`;

  return (
    <NavBar id="nav-header" className={navClass}>
      <div
        className="container flex flex-nowrap flex-1 whitespace-nowrap justify-between items-center px-4 mx-auto md:px-8"
        style={{ minHeight: '50px' }}
      >
        <div id="nav-logo" className="inline-flex items-center py-2">
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
        </div>
        <div className="hidden md:inline-flex whitespace-nowrap md:ml-10 md:pr-4 md:space-x-8">
          <a href="#" className="font-medium hover:text-gray-900">
            Product
          </a>

          <a href="#" className="font-medium hover:text-gray-900">
            Features
          </a>

          <a href="#" className="font-medium hover:text-gray-900">
            Marketplace
          </a>
        </div>
        <div className="-mr-2 flex items-center md:hidden">
          <button
            type="button"
            className="bg-transparent rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-500 hover:bg-opacity-5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            id="main-menu"
            aria-haspopup="true"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </NavBar>
  );
};

export default Nav;
