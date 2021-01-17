const Footer = (props) => {
  const { className } = props;

  return (
    <footer id="footer" className={`w-full bottom-0 px-0 pt-10 pb-5 text-white ${className}`}>
      <div className="px-4">
        <div name="row" className="md:inline-flex">
          <div name="about" className="w-full mb-5 md:w-6/12 md:mr-5">
            <h6 className="uppercase font-bold text-lg">About</h6>
            <p className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative to help the upcoming programmers with the
              code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple.
              We will help programmers build up concepts in different programming languages that include C, C++, Java,
              HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.
            </p>
          </div>
          <div name="about-2" className="inline-flex w-full md:w-6/12 md:pl-12">
            <div name="categories" className="w-6/12">
              <h6 className="uppercase font-bold text-lg">Categories</h6>
              <ul>
                <li>C</li>
                <li>UI Design</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Android</li>
              </ul>
            </div>
            <div name="categories" className="w-6/12">
              <h6 className="uppercase font-bold text-lg">Categories</h6>
              <ul>
                <li>C</li>
                <li>UI Design</li>
                <li>PHP</li>
                <li>Java</li>
                <li>Android</li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="px-4">
        <div name="row" className="block text-center md:inline-flex md:justify-between w-full">
          <div className="mb-4 md:mb-0">
            <span>
              Copyright © 2017 All Rights Reserved by <a href="#2">Luan Nguyen</a>
            </span>
          </div>
          <div>
            <span>
              Facebook - Twitter - Instagram <a href="#2">Luan Nguyen</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
