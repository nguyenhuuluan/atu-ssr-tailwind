const NavLogo = () => (
  <div
    id="nav-logo"
    className="flex flex-nowrap flex-1 whitespace-nowrap  px-4 mx-auto md:px-8"
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
  </div>
);

export default NavLogo;