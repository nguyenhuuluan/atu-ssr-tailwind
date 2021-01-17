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
  transition: background 0.36s cubic-bezier(0.32, 0.08, 0.24, 1), height 0.56s cubic-bezier(0.32, 0.08, 0.24, 1);
  &.active {
    /* transition: height 3s cubic-bezier(0.32, 0.08, 0.24, 1); */
    /* background: #000; */
    opacity: 1;
    height: 100%;
  }
`;

const generateNavList = () => (
  <NavLink className="hidden md:inline-flex whitespace-nowrap md:ml-10 md:pr-4 md:space-x-8">
    <a href="#a" className="font-medium hover:text-gray-900">
      Product
    </a>
    <a href="#a" className="font-medium hover:text-gray-900">
      Features
    </a>
    <a href="#a" className="font-medium hover:text-gray-900">
      Marketplace
    </a>
  </NavLink>
);

const NavLink = styled.li`
  ${Input}:checked ~ & {
    background-color: red;
    z-index: 10000;
  } ;
`;

const handleDrawerToggle = (e) => {
  if (e.target.checked) document.body.getElementsByTagName('nav')[0].classList.add('active');
  else document.body.getElementsByTagName('nav')[0].classList.remove('active');
};

const Nav = (props) => {
  const { color, blur } = props;
  const navClass = `tracking-wider ${
    color === 'transparent' ? 'bg-transparent text-white' : 'bg-white shadow-xl bg-opacity-75'
  }`;

  return (
    <NavBar id="nav-header" className={navClass} blur={blur}>
      <div id="nav-list" className="flex flex-start items-center ">
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
        <ul>{generateNavList()}</ul>
        <ul className="flex md:hidden px-4">
          <li>
            <label
              htmlFor="is-mobile"
              className="p-2 hover:text-gray-400 hover:bg-gray-700 hover:bg-opacity-10 rounded-full cursor-pointer"
              onClick={handleDrawerToggle}
            >
              <Input type="checkbox" id="is-mobile" />
              <i aria-hidden className="fas fa-bars" />
            </label>
          </li>
        </ul>
      </div>
    </NavBar>
  );
};

export default Nav;
