import styled from 'styled-components';

const NavBar = styled.nav`
  font-size: 19px;
  font-weight: 400;
  line-height: 42px;
//   color: #2c3241;
`;

const Nav = (props) => {
  console.log('Nav', props);
  const { color } = props;

  const navClass = `w-full text-white z-100 fixed flex flex-start items-center rounded-md p-0 ${
    color === 'transparent' ? 'bg-transparent' : 'bg-white shadow-xl'
  }`;

  return (
    <NavBar id="nav-header" className={navClass}>
      <div
        className="container flex flex-nowrap flex-1 justify-between items-center px-4 mx-auto"
        style={{ minHeight: '50px' }}
      >
        <div id="nav-logo" className="inline-flex items-center py-2">
          <a href="#logo" className="inline-flex">
            <img alt="logo" src="/img/logo.png" style={{ height: '41px', width: '41px' }} />
            <span className="pl-2">Creative Tim</span>
          </a>
          <a href="#logo">
            <span
              className="pl-3 ml-3 text-gray-500 hover:text-gray-900"
              style={{ borderLeft: '1px solid rgba(44, 50, 65, 0.2)' }}
            >
              Atu Store
            </span>
          </a>
        </div>
        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          <a href="#" className="font-medium hover:text-gray-900">
            Product
          </a>

          <a href="#" className="font-medium hover:text-gray-900">
            Features
          </a>

          <a href="#" className="font-medium hover:text-gray-900">
            Marketplace
          </a>

          <a href="#" className="font-medium hover:text-gray-900">
            Company
          </a>

          <a href="#" className="font-medium hover:text-indigo-500">
            Log in
          </a>
        </div>
      </div>
    </NavBar>
  );
};

export default Nav;
