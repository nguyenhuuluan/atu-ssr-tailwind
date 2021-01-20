import TypedComponent from '../Typed/typed.component';

const { default: Nav } = require('../Nav/nav.component');

const Header = (props) => {
  console.log('Header');
  const options = {
    fixedColor: 'white',
    fixedBackground: 'rgb(71, 65, 49, .7)',
    blur: '2px',
    textColorHover: '#ffb606',
    textColorFixedHover: '#ffb606',
    fixed: true,
  };

  return (
    <header id="header" className="bg-gray-500 relative" style={{ height: '90vh' }}>
      <Nav {...options} />
      <div
        className="h-screen relative flex items-center"
        style={{
          backgroundImage: 'url(/img/background/bg-gd-3.jpg)',
          height: '100%',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          // filter: 'brightness(80%)',
          // boxShadow: 'inset 0 0 0 2000px rgba(243, 241, 241, 0.)',
        }}
      >
        <div
          className="absolute text-white px-8 md:w-5/12 shadow-2xl"
          style={{
            // backdropFilter: 'blur(1px)',
            // backgroundcolr
            marginLeft: '13px',
            backgroundColor: 'rgba(0,0,0, 0.3)',
            // border: '1px solid #f1f1f1',
          }}
        >
          <p id="title" className="font-semibold text-6xl my-12">
            <span className="text-yellow-300">
              Gánh Đậu <br />
            </span>
          </p>
          <div id="sub-title" className="font-semibold size text-2xl mb-12">
            <TypedComponent
              className="text-yellow-500 text-4xl"
              strings={['Bún đậu mắm tôm', 'Lẩu riêu cua bắp bò', 'Lẩu ếch lá giang']}
            />
            Món ngon Hà Nội giữa lòng Sài Gòn...!
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
