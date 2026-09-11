import logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <div className="container mx-auto ">
      <hr className="text-gray-300" />
      <footer className="px-30">
        <div className="footer sm:footer-horizontal py-7 ">
          <aside>
            <img src={logo} alt="" />
            <p className="w-md mt-3 text-med">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="font-medium space-x-4 mt-4 text-high">
              <a className="link link-hover">Github</a>
              <a className="link link-hover">Twitter</a>
              <a className="link link-hover">LinkedIn</a>
            </div>
          </aside>
          <nav>
            <h6 className="font-bold text-mainColor">PRODUCT</h6>
            <a className="link link-hover text-med">Home</a>
            <a className="link link-hover text-med">Technology</a>
            <a className="link link-hover text-med">Projects</a>
          </nav>
          <nav>
            <h6 className="font-bold text-mainColor">COMPANY</h6>
            <a className="link link-hover text-med">About</a>
            <a className="link link-hover text-med">Contact</a>
            <a className="link link-hover text-med">Careers</a>
          </nav>
          <nav>
            <h6 className="font-bold text-mainColor">LEGAL</h6>
            <a className="link link-hover text-med">Privacy policy</a>
            <a className="link link-hover text-med">Terms of Service</a>
          </nav>
        </div>
        <hr className="text-gray-300" />
        <div className="flex justify-between text-sm text-low my-5">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="space-x-3">
            <a className="link link-hover">Privacy</a>
            <a className="link link-hover">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
