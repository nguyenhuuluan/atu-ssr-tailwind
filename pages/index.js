import React from 'react';
import Carousel from '../components/Carousel/carousel.component';
import withWebAppLayout from '../components/Layout/webapp.layout';

const Home = () => (
  <div name="homepage-body">
    <h1>This is home page</h1>
    <Carousel height="40%" width="60%" />

    <div className="mt-36">
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

// export default Home;
export default withWebAppLayout(Home);
