import classNames from 'classnames';
import styled from 'styled-components';

const tmpData = [
  {
    img: { src: '/img/background/bg2.jpg', alt: 'bg1.jpg' },
    title: 'Slider One',
    sub_title:
      'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
    link: { href: ' #more', description: 'Read more' },
  },
  //   {
  //     img: { src: '/img/background/bg1.jpg', alt: 'bg1.jpg' },
  //     title: 'Slider Two',
  //     sub_title:
  //       'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
  //     link: { href: ' #more', description: 'Read more' },
  //   },
  //   {
  //     img: { src: '/img/background/login.jpg', alt: 'bg1.jpg' },
  //     title: 'Slider Three',
  //     sub_title:
  //       'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
  //     link: { href: ' #more', description: 'Read more' },
  //   },
];

const Input = styled.input`
  cursor: pointer;
  & + div {
    z-index: 20 !important;
    clip-path: circle(1000px at center) !important;
  }
`;

const generateSlide = (slide, key) => (
  <div key={key}>
    <Input type="radio" name="slider-button" className="relative outline-none m-1 mb-2 z-100" checked={key === 0} />

    <div
      name="slide-wrapper"
      className="top-0 left-0 w-full h-full flex justify-center items-center absolute"
      style={{
        transition: '1.5s',
        transitionDelay: '1s',
        // zIndex: '40',
        // clipPath: 'circle(1000px at center)',
        // clipPath: 'circle(0px at center)',
      }}
    >
      <img
        name="slider-img"
        src={slide.img.src}
        alt={slide.img.alt}
        className="relative top-0 left-0 w-full h-full object-cover"
      />
      <div
        name="slider-content"
        className="absolute text-center text-white max-w-screen-sm"
        //   style={{
        //     maxWidth: '800px',
        //   }}
      >
        <h2 className="font-bold text-xl">{slide.title}</h2>
        <p>{slide.sub_title}</p>
        <a href="{slide.link.href}">{slide.link.description}</a>
      </div>
    </div>
  </div>
);

const Slider = (props) => {
  const { className, height, width } = props;
  return (
    <div
      name="slider"
      className={classNames(className, 'bg-gray-900 relative flex justify-center items-end')}
      style={{
        height,
        width,
        // zIndex: '20',
        // clipPath: 'circle(50px at center)',
        // transition: '0.5s',
      }}
    >
      {tmpData.map((slide, key) => {
        console.log(key);
        return generateSlide(slide, key);
      })}
    </div>
  );
};

export default Slider;
