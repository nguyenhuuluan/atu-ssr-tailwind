import React from 'react';
import styled from 'styled-components';
import withWebAppLayout from '../components/Layout/webapp.layout';
import { COLORS } from '../utils/constants';

const Title = styled.p`
  font-size: 4rem;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: 700;
  color: ${({ color }) => color || COLORS.BROWN};

  :before,
  :after {
    content: '';
    display: inline-block;
    width: 15%;
    height: 1px;
    background-color: ${({ color }) => color || COLORS.BROWN};
    /* margin: 0 0.25em; */
  }
`;
const Section = styled.section`
  text-align: center;
  font-size: 1.25rem;
  line-height: 1.75rem;
  /* margin: 2rem 0; */
  padding: 3rem;
`;

const Home = () => (
  <div name="homepage-body">
    <Section className="index-info">
      <Title>Gánh Đậu xin chào</Title>
      <p className="mt-4">
        Miền Bắc có một nền ẩm thực vô cùng tinh tế, nhẹ nhàng thanh tao. Tuy chỉ là món ăn dân dã nhưng bún đậu mắm tôm
        có một hương vị cuốn hút, đặc trưng riêng xứ Kinh Bắc. Bún lá, đậu phụ, mắm tôm, thịt luộc, chả cốm, rau sống …
        tất cả hoà quyện vào nhau tạo nên “hương - sắc” hút lòng thực khách Bắc Nam.
      </p>
      <button className="menu-download-btn p-4 shadow-lg rounded-lg	text-white my-8 hover:bg-yellow-500 bg-yellow-600">
        Download Menu <i className="fas fa-download ml-4" aria-hidden />
      </button>
    </Section>

    <Section className="index-info bg-gray-700">
      <Title color="white">Best Order</Title>

      <div className="order-list">
        <div className="order-item flex flex-col items-center justify-center bg-red-300">
          <p className="bg-white w-full">Phở cuốn</p>
          <img className="rounded-l shadow-xl w-16" alt="logo" src="/img/ganhdau/bua-an-gia-dinh.jpg" />
          <div className="item-info flex inline-flex bg-yellow-700 items-stretch justify-center text-white">
            <p className="item-price w-6/12 border-r-2 py-auto flex items-center justify-center">39,000</p>
            <p className="w-6/12">Đặc sản Gánh Đậu</p>
          </div>
          <p>Bánh phở lá, thịt thăn bò, rau sà lách, tía tô, diếp cá, nước mắm chua ngọt</p>
        </div>
      </div>
    </Section>

    <Section
      className="index-story inline-flex flex-col md:flex-row"
      style={{
        // background-color: red;
        backgroundImage: 'url(/img/tmp.PNG)',
        backgroundRepeat: 'repeat',
      }}
    >
      <div className="story-image md:w-6/12 p-4">
        <img className="rounded-l shadow-xl" alt="logo" src="/img/ganhdau/bua-an-gia-dinh.jpg" />
      </div>

      <div className="story-content md:w-6/12 p-4">
        <Title className="whitespace-nowrap">Our Story</Title>
        <p className="mt-4 text-justify">
          Gia vị chính là linh hồn của một món ăn mà chỉ có người đam mê ẩm thực mới cảm và làm ra món ăn đủ vị, trọn
          hương sắc. Chúng tôi gởi gắm những đam mê và cảm hứng của mình vào từng món ăn, mỗi một góc nhỏ ở không gian
          quán là một chút "gia vị" riêng để thực khách có một bữa ăn trọn vẹn.
        </p>
      </div>
    </Section>
    {/* <Carousel height="40%" width="60%" /> */}
  </div>
);

// export default Home;
export default withWebAppLayout(Home);
