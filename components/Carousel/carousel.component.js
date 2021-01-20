import styled from 'styled-components';

const tmpData = [
  {
    img: { src: '/img/background/bg2.jpg', alt: 'bg1.jpg' },
    title: 'Slider One',
    sub_title:
      'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
    link: { href: ' #more', description: 'Read more' },
  },
  {
    img: { src: '/img/logo.png', alt: 'bg1.jpg' },
    title: 'Slider Two',
    sub_title:
      'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
    link: { href: ' #more', description: 'Read more' },
  },
  {
    img: { src: '/img/background/login.jpg', alt: 'bg1.jpg' },
    title: 'Slider Three',
    sub_title:
      'Sunt consectetur est consequat id consectetur velit commodo veniam ex irure exercitation consequat sint.',
    link: { href: ' #more', description: 'Read more' },
  },
];

const Input = styled.input`
  position: absolute;
  visibility: hidden;
  opacity: 1;
  width: 0;
  height: 0;
`;

const Slide = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  clip-path: circle(0px at center);
  background-color: black;

  ${Input}:checked ~ &:first-of-type {
    transition: 3s;
    transition-delay: 0s;
    /* z-index: 11 !important; */
    clip-path: circle(1000px at center) !important;
  }
`;
const Label = styled.label`
  z-index: 1;
  display: block;
  position: relative;
  transition: all 0.25s;
  cursor: pointer;
  margin: auto 0.25em;
  :hover :before {
    border: 0.1em solid #ffffff;
    transform: scale(1.25, 1.25);
  }

  :before {
    display: inline-block;
    content: '';
    position: relative;
    border: 0.1em solid #aaaaaa;
    border-radius: 50%;
    height: 0.5em;
    width: 0.5em;
    transition: all 0.25s;
  }

  ${Input}:checked + &:before {
    border: 0.1em solid #ffffff;
  }
`;

const generateSlide = (slide, key) => (
  <div key={key}>
    <Input id={`slider-button-${key}`} type="radio" name="slider-button" defaultChecked={key === 0} />
    <Label htmlFor={`slider-button-${key}`} />
    <Slide id={`slide-wrapper-${key}`}>
      <img
        name="slider-img"
        src={slide.img.src}
        alt={slide.img.alt}
        className="relative top-0 left-0 w-full h-full object-cover"
      />
      <div name="slider-content" className="absolute text-center text-white max-w-screen-sm">
        <h2 className="font-bold text-xl">{slide.title}</h2>
        <p>{slide.sub_title}</p>
        <a href="{slide.link.href}">{slide.link.description}</a>
      </div>
    </Slide>
  </div>
);

const Slider = styled.div`
  background-color: #000;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: ${(props) => (props.height ? props.height : '50%')};
  width: ${(props) => (props.width ? props.width : '50%')};
`;

const Carousel = ({ className, height, width }) => (
  <Slider height={height} width={width} className={className}>
    {tmpData.map((slide, key) => generateSlide(slide, key))}
  </Slider>
);

export default Carousel;
