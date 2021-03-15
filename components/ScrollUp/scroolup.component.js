import { useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../../utils/constants';

const ScroolUp = styled.div`
  position: fixed;
  height: 45px;
  width: 42px;
  background: ${COLORS.PRIMARY};
  right: 30px;
  bottom: 10px;
  text-align: center;
  line-height: 45px;
  color: #fff;
  z-index: 9999;
  font-size: 30px;
  border-radius: 6px;
  border-bottom-width: 2px;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;

  :hover {
    filter: brightness(90%);
  }
  &.show {
    bottom: 30px;
    opacity: 1;
    pointer-events: auto;
  }
`;

const ScrollUpButton = () => {
  useEffect(() => {
    function handleMobileResize() {
      if (window.scrollY > 200) document.body.getElementsByClassName('scroll-up-btn')[0]?.classList.add('show');
      else document.body.getElementsByClassName('scroll-up-btn')[0]?.classList.remove('show');
    }
    window.addEventListener('scroll', handleMobileResize);

    return () => window.removeEventListener('scroll', handleMobileResize);
  }, []);

  const onTop = () => window.scrollTo(0, 0);

  return (
    <ScroolUp className="scroll-up-btn" onClick={onTop}>
      <i className="fas fa-angle-up" aria-hidden />
    </ScroolUp>
  );
};

export default ScrollUpButton;
