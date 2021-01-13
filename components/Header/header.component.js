const { default: Nav } = require('../Nav/nav.component');

const Header = (props) => {
  console.log('Header');

  return (
    <header id="header">
      <Nav />
      <div>Header content</div>
    </header>
  );
};


export default Header;