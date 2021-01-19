const { default: Nav } = require('../Nav/nav.component');

const Header = (props) => {
  console.log('Header');

  return (
    <header id="header" className="bg-red-200 relative" style={{ height: '90vh' }}>
      <Nav fixedColor="white" fixedBackground="crimson" />
      <div
        className="h-screen relative flex items-center"
        style={{
          backgroundImage: 'url(/img/background/bg1.jpg)',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute mx-auto text-white px-8 md:w-5/12">
          <p id="title" className="font-semibold size text-6xl my-12">
            Hello world
          </p>
          <p id="sub-title" className="font-semibold size text-2xl">
            Excepteur deserunt nulla elit laboris qui commodo proident ex pariatur.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
