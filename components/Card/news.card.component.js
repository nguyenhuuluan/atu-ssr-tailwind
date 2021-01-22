import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Link = styled.a`
  transition: 2s ease;
  width: auto;
  height: 100%;
  :before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    width: 0;
    height: 100%;
    top: -0.05rem;
    background: rgba(69, 124, 196, 0.2);
    transition: width 0.35s linear;
  }

  :hover {
    width: 100%;
    transition: 2s ease;
    &:before {
      width: 100%;
    }
  }
`;

const NewsCard = (props) => {
  const { id, title, img, content, link } = props;
  return (
    <div key={id} className="new-item flex flex-col bg-gray-100 rounded-lg overflow-hidden text-left justify-between">
      <div>
        <img className="new-image rounded-l shadow-xl w-full" alt="logo" src={img} />
        <div className="new-title w-full bg-yellow-400 text-white p-2" style={{ minHeight: '2.5rem' }}>
          <p>{title}</p>
        </div>
        <p className="new-content text-justify p-2">{content}</p>
      </div>

      <div className="new-link relative p-2 bottom-0">
        <Link href={link} className="inline-block text-justify text-indigo-600  ">
          Xem tiếp...
        </Link>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};

NewsCard.defaultProps = {
  id: 1,
  title: 'Ký sự bún đậu mắm tôm chiều Chủ Nhật',
  content:
    'Elit occaecat aliqua amet eiusmod deserunt voluptate ut velit. Elit occaecat aliqua amet eiusmod deserunt voluptate ut velit.',
  img: '/img/logo.png',
  link: '#a',
};

export default NewsCard;
