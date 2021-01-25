import { useRouter } from 'next/router';
import Nav from '../../components/Nav/nav.component';
import style from './index.module.scss';
const LoginPage = (props) => {
  const router = useRouter();
  const onLogin = (e) => {
    e.preventDefault();

    router.push('/dashboard');
  };

  const loginHeader = () => (
    <header>
      <Nav color="transparent" />
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
