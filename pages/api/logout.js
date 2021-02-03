import nextConnect from 'next-connect';
import auth from '../../middleware/auth';

const handler = nextConnect();

handler.use(auth).get((req, res) => {
  console.log('[api] logout [get]');
  req.logOut();
  res.statusCode(204).end();
});
