import React from 'react';
import styled from 'styled-components';
import NewsCard from '../components/Card/news.card.component';
import ProductCard from '../components/Card/product.card.component';
import withWebAppLayout from '../components/Layout/webapp.layout';
import { COLORS } from '../utils/constants';

const products = [
  {
    id: 1,
    title: 'Phở cuốn',
    subtitle: 'Ăn chơi',
    img: '/img/ganhdau/product/phocuon.jpg',
    price: '39,000',
    description: 'Bánh phở lá, thịt thăn bò, rau sà lách, tía tô, diếp cá, nước mắm chua ngọt',
  },
  {
    id: 2,
    title: 'Bún đậu tá lả',
    subtitle: 'Ăn ngon',
    img: '/img/ganhdau/product/tala.jpg',
    price: '89,000',
    description: 'Bún lá, đậu phụ, thịt bắp giò, chả cua, chả cốm, nem chua rán, rau sống, dưa leo',
  },
  {
    id: 3,
    title: 'Lẩu ếch lá giang',
    subtitle: 'Ăn ngon',
    img: '/img/ganhdau/product/lauech.jpg',
    price: '239,000',
    description: 'Ếch đồng, lá giang, rau muống, bắp chuối, đậu bắp, bạc hà, cà chua, tóp mỡ, tỏi phi, bún sợi',
  },
  {
    id: 4,
    title: 'Lẩu riêu cua bắp bò',
    subtitle: 'Ăn ngon',
    img: '/img/ganhdau/product/laurieu.jpg',
    price: '269,000',
    description: 'Riêu cua đồng, bắp bò hoa, thịt viên, mọc viên, chả cá thác lác, chả Huế, hột vịt lộn, rau...',
  },
  {
    id: 5,
    title: 'Chân gà sả tắc',
    subtitle: 'Ăn chơi',
    img: '/img/ganhdau/product/changasatac.jpg',
    price: '39,000',
    description: 'Chân gà, sả tươi, trái tắc, ớt, nước mắm, sốt muối ớt',
  },
  {
    id: 6,
    title: 'Ốc nhồi thịt hấp',
    subtitle: 'Ăn chơi',
    img: '/img/ganhdau/product/ocbuu.jpg',
    price: '39,000',
    description: 'Ốc bươu đen, thịt heo, sả, nước mắm gừng',
  },
  {
    id: 7,
    title: 'Đậu sốt trứng muối',
    subtitle: 'Ăn kèm',
    img: '/img/ganhdau/product/dausottrungmuoi.jpg',
    price: '39,000',
    description: 'Đậu phụ, trứng vịt muối, hành lá, vừng rang',
  },
];
const news = [
  {
    id: 1,
    title: 'Ký sự bún đậu mắm tôm chiều Chủ Nhật',
    content: 'Những ai đã ở Hà Nội hay đã đi qua Hà Nội, thì làm sao có thể quên được thứ...',
    img: '/img/ganhdau/product/phocuon.jpg',
    link: '#a',
  },
  {
    id: 2,
    title: 'Cách pha mắm tôm ngon thần sầu',
    content: 'Đối với hầu hết người miền Bắc, mắm tôm là thứ gia vị được xem là “tinh túy”, góp phần...',
    img: '/img/ganhdau/product/phocuon.jpg',
    link: '#a',
  },
  {
    id: 3,
    title: 'Đã bao lâu rồi bạn không ăn tối cùng gia đình?',
    content: 'Bữa cơm gia đình luôn là điều tuyệt vời nhất! Má nói: “Tao thèm bún đậu, ỗng ghiền lẩu riêu,...',
    img: '/img/ganhdau/product/phocuon.jpg',
    link: '#a',
  },
  {
    id: 4,
    title: 'Đặt món mang về, gọi gì cho ngon?',
    content: 'Mùa Corona, ngại ra quán xá Muốn mua về nhà, lại sợ mất ngon! Gánh đâu chỉ có bún đậu...',
    img: '/img/ganhdau/product/phocuon.jpg',
    link: '#a',
  },
];
const Title = styled.p`
  font-size: 4rem;
  text-align: center;
  font-family: Dancing Script, cursive;
  font-weight: 700;
  line-height: 3rem;
  color: ${({ color }) => color || COLORS.BROWN};
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
      <Title>~~Gánh Đậu xin chào~~</Title>
      <p className="mt-4">
        Miền Bắc có một nền ẩm thực vô cùng tinh tế, nhẹ nhàng thanh tao. Tuy chỉ là món ăn dân dã nhưng bún đậu mắm tôm
        có một hương vị cuốn hút, đặc trưng riêng xứ Kinh Bắc. Bún lá, đậu phụ, mắm tôm, thịt luộc, chả cốm, rau sống …
        tất cả hoà quyện vào nhau tạo nên “hương - sắc” hút lòng thực khách Bắc Nam.
      </p>
      <button className="menu-download-btn p-4 shadow-lg rounded-lg	text-white my-8 hover:bg-yellow-500 bg-yellow-600">
        Download Menu <i className="fas fa-download ml-4" aria-hidden />
      </button>
    </Section>

    <Section
      className="index-info bg-gray-700"
      style={{
        // background-color: red;
        backgroundImage: 'url(/img/tmp.PNG)',
        backgroundRepeat: 'repeat',
      }}
    >
      <Title>__Best Order__</Title>
      <div className="order-list grid gap-4 mt-8 grid-cols-card">
        {products.map((item, index) => (
          <ProductCard key={+index} {...item} />
        ))}
      </div>
    </Section>

    <Section
      className="index-story inline-flex flex-col md:flex-row"
      // style={{
      //   // background-color: red;
      //   backgroundImage: 'url(/img/tmp.PNG)',
      //   backgroundRepeat: 'repeat',
      // }}
    >
      <div className="story-image md:w-6/12 p-4 flex items-center justify-center">
        <img className="rounded-lg shadow-2xl" alt="logo" src="/img/ganhdau/bua-an-gia-dinh.jpg" />
      </div>

      <div className="story-content md:w-6/12 p-4">
        <Title>~~Our Story~~</Title>
        <div className="mt-4 text-justify">
          <p className="text-2xl my-4 text-yellow-400 text-center">Có một chàng trai đam mê ẩm thực truyền thống</p>
          <p>
            Gia vị chính là linh hồn của một món ăn mà chỉ có người đam mê ẩm thực mới cảm và làm ra món ăn đủ vị, trọn
            hương sắc. Chúng tôi gởi gắm những đam mê và cảm hứng của mình vào từng món ăn, mỗi một góc nhỏ ở không gian
            quán là một chút "gia vị" riêng để thực khách có một bữa ăn trọn vẹn.
          </p>
        </div>
      </div>
    </Section>
    {/* <Carousel height="40%" width="60%" /> */}

    <Section
      className="index-info bg-gray-700"
      style={{
        // background-color: red;
        backgroundImage: 'url(/img/tmp.PNG)',
        backgroundRepeat: 'repeat',
      }}
    >
      <Title underscore>Chuẩn Combo Gia Đình mang về...</Title>
      <div className="order-list grid gap-4 mt-8 grid-cols-card">
        {products.map((item, index) => (
          <ProductCard key={index} {...item} />
        ))}
      </div>
    </Section>

    <Section className="index-latest-new">
      <Title>__Lastest News__</Title>
      <div className="order-list grid gap-4 mt-8 grid-cols-card">
        {news.map((item, index) => (
          <NewsCard key={index} {...item} />
        ))}
      </div>
    </Section>
  </div>
);

// export default Home;
export default withWebAppLayout(Home);
