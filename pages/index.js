import React from 'react';
import Carousel from '../components/Carousel/carousel.component';
import Footer from '../components/Footer/footer.component';
import Header from '../components/Header/header.component';
// import Header from '../components/header.component';

const generateHeader = () => <Header />;

const generateBody = () => (
  <div name="homepage-body">
    <h1>This is home page</h1>
    <Carousel height="40%" width="60%" />

    <div className="m-36">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">{/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}</div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  </div>
);

const generateFooter = () => <Footer className="bg-gray-800" />;

const Home = () => (
  <div className="wrapper">
    {generateHeader()}
    {generateBody()}
    {generateFooter()}
  </div>
);

export default Home;
