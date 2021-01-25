import React from 'react';
import styled from 'styled-components';
import withWebAppLayout from '../../components/Layout/webapp.layout';
import { COLORS } from '../../utils/constants';

const Section = styled.section`
  --padding: 1rem;
  --margin: 2rem;
  position: relative;
  min-height: 100vh;
  background-color: none;

  & .container {
    /* margin: 2rem; */
    height: 80vh;
    padding: var(--padding);
  }

  & h1 {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }

  & .info {
    position: relative;
    margin: 1rem 0;
    color: white;

    & li {
      position: relative;
      display: flex;
      margin: 1rem 0;
      cursor: pointer;
      align-items: stretch;
      opacity: 0.5;
      transition: all 0.2s ease-in;

      & span {
        margin: auto 0;
        &:nth-child(1) i {
          margin-right: 0.5rem;
          font-size: 1.5rem;
        }
      }
      &:hover {
        opacity: 1;
        transform: translateX(1rem) scale(1.1);
      }
    }
  }

  & .contact-info {
    top: 40px;
    background: #e66813;
    padding: 1rem;
    display: flex;
    border-radius: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    z-index: 2;
  }
  & .contact-form {
    position: absolute;
    width: 100%;
    height: calc(100% - 80px);
    right: 0;
    flex: 1;
    z-index: 1;

    & .formBox {
      /* background-color: #e5e7eb; */
      /* margin-left: 5rem; */
      position: absolute;
      top: 0;
      right: 0;
      width: calc(100% - 2 * var(--margin) - 2 * var(--padding));
      height: 100%;
      padding: var(--padding);

      text-align: center;
      ::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: #d2d2c2;
        box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
        border-radius: 0.75rem;
        z-index: -1;
      }
    }
  }

  & .sci {
    display: flex;
    color: #fff;
    flex-direction: row;
    --tw-space-x-reverse: 0;
    margin: 0 auto 2rem auto;
    /* margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))); */
    font-size: 2.5rem;
    line-height: 2rem;

    & li {
      opacity: 0.5;
      transition: transform 0.2s ease-in;
      &:hover {
        opacity: 1;
        transform: scale(1.2);
      }
    }
  }
  & .inputBox {
    position: relative;
    margin-bottom: 1.5rem;

    & input,
    textarea {
      width: 100%;
      padding: 5px 0;
      font-size: 1.2rem;
      font-weight: 300;
      color: #333;
      border-bottom: 1px solid #777;
      outline: none;

      &:focus,
      &:valid {
        & ~ span {
          transform: translateY(-1.5rem);
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 1px;
          color: #ff568c;
        }
      }
    }
    & textarea {
      min-height: 120px;
    }

    & span {
      position: absolute;
      left: 0;
      /* padding: 5px 0; */
      font-weight: 300;
      color: #333;
      pointer-events: none;
      transition: 0.5s;
    }
  }
`;

const ContactPage = () => (
  <Section>
    <div className="container relative flex items-center flex-col md:flex-row">
      <div className="contact-info">
        <h1 className="text-center">Contact Info</h1>
        <ul className="info">
          <li>
            <span>
              <i className="far fa-clock" />
            </span>
            <span>10:00 - 22:00</span>
          </li>
          <li>
            <span>
              <i className="far fa-envelope" />
            </span>
            <span>wecare.ganhdau@gmail.com</span>
          </li>
          <li>
            <span>
              <i className="fas fa-phone-alt" />
            </span>
            <span>028 668 33331</span>
          </li>

          <li>
            <span>
              <i className="fas fa-map-marker-alt" />
            </span>
            <span>
              119B Nguyễn Văn Quá <br />
              Đông Hưng Thuận, Quận 12 <br />
              Tp.Hồ Chí Minh
              <br />
            </span>
          </li>
        </ul>
        <ul className="sci space-x-4">
          <li>
            <a href="#a">
              <i className="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#a">
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-form flex-1 ">
        <div className="formBox">
          <h1>Send a message</h1>
          <div className="w-3/4 p-4 float-right  flex relative justify-between flex-wrap">
            <div className="inputBox w-6/12">
              <input className="w-full" type="text" name="" required />
              <span>First Name</span>
            </div>
            <div className="inputBox w-6/12">
              <input type="text" name="" required />
              <span>Last Name</span>
            </div>
            <div className="inputBox w-6/12">
              <input type="text" name="" required />
              <span>Email Address</span>
            </div>
            <div className="inputBox w-6/12">
              <input type="text" name="" required />
              <span>Mobile Number</span>
            </div>
            <div className="inputBox w-full">
              <textarea type="text" name="" required />
              <span>Write your message here...</span>
            </div>
            <div className="inputBox w-full">
              <input type="submit" value="Send" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default withWebAppLayout(ContactPage);
