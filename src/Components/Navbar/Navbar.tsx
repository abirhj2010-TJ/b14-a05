import logo from "../../assets/logo-text.png";
import hamburger from "../../assets/hamburger.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm container mx-auto px-20 sticky top-0">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost p-2">
            <img src={hamburger} alt="Menu" className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <img
          src={logo}
          alt="Logo"
          className="hidden md:block w-24 lg:w-28 xl:w-32"
        />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
        <img src={logo} alt="Logo" className="w-20 sm:w-24" />
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-sm lg:text-base xl:text-base">Home</a>
          </li>
          <li>
            <a className="text-sm lg:text-base xl:text-base">Technologies</a>
          </li>
          <li>
            <a className="text-sm lg:text-base xl:text-base">Projects</a>
          </li>
          <li>
            <a className="text-sm lg:text-base xl:text-base">About</a>
          </li>
          <li>
            <a className="text-sm lg:text-base xl:text-base">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-1 sm:gap-2">
        <a className="btn btn-sm sm:btn-md text-xs sm:text-sm lg:text-md rounded-full">
          Sign In
        </a>
        <a className="btn btn-sm sm:btn-md text-xs sm:text-sm lg:text-md rounded-full">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
