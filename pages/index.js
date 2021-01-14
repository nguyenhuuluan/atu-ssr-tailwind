import React from 'react';
import Footer from '../components/Footer/footer.component';
import Header from '../components/Header/header.component';
// import Header from '../components/header.component';

const Home = () => (
  <div className="wrapper">
    <Header />
    <div name="homepage-body">
      <h1>This is home page</h1>
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div className="flex-shrink-0">{/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}</div>
        <div>
          <div className="text-xl font-medium text-black">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
    <Footer className="absolute bg-gray-800" />
  </div>
);

export default Home;
