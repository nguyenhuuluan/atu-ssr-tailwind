import React from 'react';
import styled from 'styled-components';
import withWebAppLayout from '../../components/Layout/webapp.layout';

const Section = styled.section`
  position: relative;
  min-height: 100vh;
  background-color: none;
  /* background-color: #112d42; */
  /* z-index: 1; */
  padding: 2rem;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: #03a9f4;
  }

  & .container {
    /* margin: 2rem; */
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

      & span {
        margin: auto 0;
        &:nth-child(1) i {
          margin-right: 0.5rem;
          font-size: 1.5rem;
        }
      }
      &:hover {
        opacity: 1;
      }
    }
  }

  /* & .container {
    min-height: 550px;
  } */

  & .contact-info {
    /* position: absolute; */
    top: 40px;
    width: 350px;
    /* height: calc(100% - 80px); */
    background: #0f3959;
    padding: 1rem;
    display: flex;
    border-radius: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    /* z-index: 1; */
    /* ::before {
      --margin: 2.5rem;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: calc(50% - 2 * var(--margin));
      height: calc(100% - 2 * var(--margin));
      background: red;
      margin: var(--margin);
      z-index: -1;
    } */
  }
  & .contact-form {
    /* position: absolute; */
    top: 40px;
    width: 100%;
    /* height: calc(100% - 80px); */
    background: #0f3952;
    padding: 1rem;
    display: flex;
    border-radius: 0.75rem;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    z-index: 1;

    /* ::before {
      --margin: 2.5rem;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: calc(50% - 2 * var(--margin));
      height: calc(100% - 2 * var(--margin));
      background: blue;
      margin: var(--margin);
      z-index: -1;
    } */
  }

  & .sci {
    display: flex;
    color: #fff;
    flex-direction: row;
    --tw-space-x-reverse: 0;
    margin-top: 2rem;
    margin-right: 0.5rem;
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
`;

const ContactPage = () => (
  <Section>
    <div className="container relative flex items-center md:items-stretch flex-col md:flex-row">
      <div className="contact-info">
        <h1>Contact Info</h1>
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
        <ul className="sci space-x-4 text-2x">
          <li>
            <a href="#a">
              <i class="fab fa-facebook-square" />
            </a>
          </li>
          <li>
            <a href="#a">
              <i class="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="contact-form flex-1">
        <h1>Send a message</h1>
        <div className="formBox">
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>First Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>Last Name</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>Email Address</span>
          </div>
          <div className="inputBox w50">
            <input type="text" name="" required />
            <span>Mobile Number</span>
          </div>
          <div className="inputBox w100">
            <textarea type="text" name="" required />
            <span>Write your message here...</span>
          </div>
          <div className="inputBox w100">
            <input type="submit" value="Send" />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default withWebAppLayout(ContactPage);
