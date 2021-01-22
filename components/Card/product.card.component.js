import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
  const { id, title, subtitle, img, price, description } = props;
  return (
    <div
      key={id}
      className="order-item flex flex-col items-center h-full bg-gray-100 pb-4 rounded-lg overflow-hidden"
    >
      <p className="bg-yellow-500 w-full h-12 flex items-center justify-center">{title}</p>
      <img className="rounded-l shadow-xl w-full" alt="logo" src={img} />
      <div
        className="item-info flex inline-flex w-full bg-yellow-400 items-stretch justify-center text-white"
        style={{ minHeight: '2.5rem' }}
      >
        <p className="item-price w-6/12 border-r-2 py-auto flex items-center justify-center">{price}</p>
        <p className="w-6/12 flex items-center justify-center">{subtitle}</p>
      </div>
      <p className="text-justify m-4">{description}</p>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  description: PropTypes.string,
};

ProductCard.defaultProps = {
  id: 1,
  title: 'Iphone X',
  subtitle: 'Smart Phone',
  img: '/img/logo.png',
  price: '159$',
  description: 'Elit occaecat aliqua amet eiusmod deserunt voluptate ut velit.',
};

export default ProductCard;
