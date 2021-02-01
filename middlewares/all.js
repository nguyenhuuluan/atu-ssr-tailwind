import nextConnect from 'next-connect';
import passport from 'passport';

const allMiddleware = nextConnect();

allMiddleware.use(passport.initialize()).use(passport.session());

export default allMiddleware;
