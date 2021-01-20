import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typed from 'typed.js';

const TypedComponent = (props) => {
  const { className, strings } = props;
  console.log(strings);
  useEffect(() => {
    const typed = new Typed('.typing', {
      strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });
    typed.start();

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className={className}>
      <span className="typing" />
    </div>
  );
};

TypedComponent.defaultProps = {
  className: '',
};

TypedComponent.propTypes = {
  strings: PropTypes.array.isRequired,
  className: PropTypes.string,
};

export default TypedComponent;
