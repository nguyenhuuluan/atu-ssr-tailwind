import { useRouter } from 'next/router';
import style from './index.module.scss';
const LoginPage = (props) => {
  const router = useRouter();
  const onLogin = (e) => {
    e.preventDefault();

    router.push('/dashboard');
  };

  const loginHeader = () => (
    <header className="bg-gray-300 w-full text-white z-100 fixed flex flex-start items-center rounded-md p-0 shadow-xl">
      <div
        className="container flex flex-nowrap flex-1 justify-between items-center px-4 mx-auto"
        style={{ minHeight: '50px' }}
      >
        <div className="container">
          <div className="flex flex-row items-center ">
            <img alt="logo" src="/img/logo.png" style={{ height: '41px', width: '41px' }} />
            <h3>dsa</h3>
          </div>
        </div>
        <div className="">
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <a href="#" class="font-medium text-gray-500 hover:text-gray-900">
              Product
            </a>

            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Features
            </a>

            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Marketplace
            </a>

            <a href="#" className="font-medium text-gray-500 hover:text-gray-900">
              Company
            </a>

            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Log in
            </a>
          </div>
        </div>
      </div>
    </header>
  );
  const loginBody = () => (
    <div
      className={`min-h-screen h-auto relative m-0 p-0 border-none items-center bg-gray-500 loginBackground ${style.loginBackground}`}
    >
      <div className="container z-10 absolute bg-red-600 w-full px-4 mx-auto my-auto pt-48 pb-48 transform -translate-y-2/4 -translate-x-2/4 top-1/2 left-1/2">
        <form className="flex flex-col bg-gray-600">
          <h1>Body will be here</h1>

          <input placeholder="User name" />
          <input placeholder="Password" type="password" />
          <button onClick={onLogin} type="button">
            Login
          </button>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </form>
      </div>
    </div>
  );
  const loginFooter = () => (
    <div>
      <h1>Footer will be here</h1>
    </div>
  );

  return (
    <>
      {loginHeader()}
      {loginBody()}
      {loginFooter()}
    </>
  );
};

export default LoginPage;
