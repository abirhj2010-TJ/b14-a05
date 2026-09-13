
const Footer = () => {
  return (
    <div className="container mx-auto mt-3 md:mt-5">
      <hr className="text-gray-300" />

      <footer className="px-4 sm:px-6 md:px-8 lg:px-20 xl:px-30 ">
        <div className="footer sm:footer-horizontal py-7 md:py-10">
          <aside className="flex flex-col items-center text-center md:items-start md:text-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-tr from-brand-start/50 via-brand-middle/80 to-brand-end text-md font-bold text-white">
                DS
              </div>

              <p className="text-lg font-bold">
                Dev <span className="bg-linear-to-r from-brand-start via-brand-middle to-brand-end bg-clip-text text-transparent">
                  Stack
                </span>
              </p>
            </div>

            <p className="max-w-sm mt-3 text-sm sm:text-base text-med">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            <div className=" font-medium space-x-4 mt-4 text-high">
              <a className="link link-hover" href="https://github.com/abirjuboraj201" target="_blank">Github</a>
              <a className="link link-hover" href="https://x.com/" target="_blank">Twitter</a>
              <a className="link link-hover" href="https://www.linkedin.com/signup/cold-join" target="_blank">LinkedIn</a>
            </div>
          </aside>

          <nav className="hidden md:flex md:flex-col">
            <h6 className="font-bold text-mainColor">PRODUCT</h6>
            <a className="link link-hover text-med" href="">Home</a>
            <a className="link link-hover text-med" href="">Technology</a>
            <a className="link link-hover text-med" href="">Projects</a>
          </nav>

          <nav className="hidden md:flex md:flex-col">
            <h6 className="font-bold text-mainColor">COMPANY</h6>
            <a className="link link-hover text-med" href="">About</a>
            <a className="link link-hover text-med" href="">Contact</a>
            <a className="link link-hover text-med" href="">Careers</a>
          </nav>

          <nav className="hidden md:flex md:flex-col">
            <h6 className="font-bold text-mainColor">LEGAL</h6>
            <a className="link link-hover text-med" href="">Privacy policy</a>
            <a className="link link-hover text-med" href="">Terms of Service</a>
          </nav>
        </div>

        <hr className="text-gray-300" />

        <div className="flex justify-between items-center gap-3 text-xs sm:text-sm text-low my-5">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="space-x-3">
            <a className="link link-hover" href="">Privacy</a>
            <a className="link link-hover" href="">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;