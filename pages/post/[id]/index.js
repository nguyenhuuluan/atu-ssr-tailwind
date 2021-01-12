import Header from '../../../components/header.component';

const Post = ({ title, body }) => (
  <>
    <Header />
    <h1>{title}</h1>
    <p>{body}</p>
  </>
);

export const getServerSideProps = async (context) => {
  const { query } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
  const post = await res.json();
  return {
    props: { title: post.title, body: post.body }, // will be passed to the page component as props
  };
};
export default Post;
