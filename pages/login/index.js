import Link from 'next/link';
import Router, { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import Nav from '../../components/Nav/nav.component';
import useUser from '../../hooks/user';

const Body = styled.div`
  position: relative;
  background-image: url(/img/background/login.jpg);
  background-size: cover;
  background-position: top center;
  align-items: center;
  min-height: 100vh;
  border-style: none;

  :before {
    background: rgba(0, 0, 0, 0.5);
  }
  :before,
  :after {
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: block;
    left: 0;
    top: 0;
    content: '';
  }

  & .submit {
    display: flex;
    flex-direction: column;

    & > button[type='submit'] {
      margin-right: 0 0.5rem;
      padding: 0.5rem 1rem;
      cursor: pointer;
      background: #fff;
      border: 1px solid #ccc;
      border-radius: 4px;

      :hover {
        border-color: #888;
      }
    }
  }

  & .error {
    color: brown;
    margin: 1rem 0 0;
  }
  & .inputBox {
    position: relative;
    margin-bottom: 1.5rem;

    & input,
    textarea {
      width: 100%;
      padding: 0.25rem 0;
      font-size: 1.2rem;
      font-weight: 300;
      color: #333;
      border-radius: 4px;
      border: 1px solid #ccc;
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
      left: 0.5rem;
      margin-top: 0.5rem;
      font-weight: 300;
      color: #333;
      pointer-events: none;
      transition: 0.5s;
    }
  }
`;

const LoginPage = (props) => {
  const [errorMsg, setErrorMsg] = useState('s');
  const [isSignup, setIsSignup] = useState(false);
  const [user, { mutate }] = useUser({ redirectTo: '/about', redirectIfFound: true });

  async function handleSignUp(e) {
    e.preventDefault();
    setIsSignup(!isSignup);
  }

  const handleLogin = async (body) => {
    console.log('handleLogin', body);
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 200) Router.push('/about');
      else throw new Error(await res.text());
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  };

  const handleSignup = async (body) => {
    console.log('handleSignup', body);
    try {
      if (errorMsg) setErrorMsg('');

      const res = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.status === 201) {
        const userObj = await res.json();
        // set user to useSWR state
        mutate(userObj);
      } else setErrorMsg(await res.text());
    } catch (error) {
      console.error('An unexpected error happened occurred:', error);
      setErrorMsg(error.message);
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (errorMsg) setErrorMsg('');

    let body = {
      username: e.currentTarget.username.value,
      password: e.currentTarget.password.value,
    };
    // console.log(body);

    if (isSignup) {
      body = { ...body, name: e.currentTarget.name.value };
      await handleSignup(body);
    } else {
      await handleLogin(body);
    }
  }

  // const router = useRouter();

  // const onLogin = (e) => {
  //   e.preventDefault();

  //   router.push('/dashboard');
  // };

  const loginHeader = () => (
    <header>
      <Nav background="rgb(71, 65, 49, .7)" textColorFixedHover="#ffb606" />
    </header>
  );

  const loginBody = () => (
    <Body className="flex items-center justify-center">
      <div className="container z-10 absolute bg-red-600 px-4 py-48">
        <form className="flex flex-col bg-gray-600 p-4" onSubmit={handleSubmit}>
          <h1>Body will be here</h1>

          <div className="inputBox" hidden={!isSignup}>
            <input type="text" name="name" required={isSignup} />
            <span>Full Name</span>
          </div>
          <div className="inputBox">
            <input type="text" name="username" required />
            <span>Username</span>
          </div>
          <div className="inputBox">
            <input type="password" name="password" required />
            <span>Password</span>
          </div>
          <div className="submit">
            <button type="button" className="focus:outline-none w-max p-2 text-left" onClick={handleSignUp}>
              I don't have an account
            </button>
            <button type="submit" className="text-center">
              {isSignup ? 'Signup' : 'Login'}
            </button>
          </div>

          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
      </div>
    </Body>
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
