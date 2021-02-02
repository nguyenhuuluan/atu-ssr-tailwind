import nextConnect from 'next-connect';
import session from '../lib/session';
import myPassport from './passport';

const auth = nextConnect()
  .use(
    session({
      name: 'sess',
      secret: process.env.TOKEN_SECRET,
      cookie: {
        maxAge: 60 * 60 * 8, // 8 hours,
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        sameSite: 'lax',
      },
    }),
  )
  .use((req, res, next) => {
    // Initialize mocked database
    // Remove this after you add your own database
    req.session.users = req.session.users || [];
    console.log('auth', req.session.users);
    next();
  })
  .use(myPassport.initialize())
  .use(myPassport.session());

export default auth;
