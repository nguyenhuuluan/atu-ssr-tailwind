import Footer from '../Footer/footer.component';

// const { default: styled } = require('styled-components');
const { default: Header } = require('../Header/header.component');
const { default: ScrollUpButton } = require('../ScrollUp/scroolup.component');

// const Wrapper = styled.div``;

const withWebAppLayout = (Page) => () => (
  <div className="wrapper">
    <ScrollUpButton />
    <Header />
    <Page />
    <Footer className="bg-gray-800" />
  </div>
);

export default withWebAppLayout;
