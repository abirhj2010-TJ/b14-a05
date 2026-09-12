import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 container mx-auto bg-base-100 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-30 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost p-1.5 sm:p-2"
          >
            <RxHamburgerMenu size={20} />
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content z-10 mt-3 w-48 rounded-box bg-base-100 p-2 text-high shadow"
          >
            <li>
              <a className="text-brand-start">Home</a>
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

        <div className="ml-1 flex items-center gap-1.5 sm:gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-linear-to-tr from-brand-start/50 via-brand-middle/80 to-brand-end text-xs font-bold text-white sm:h-7 sm:w-7 sm:text-sm md:h-8 md:w-8 md:text-md">
            DS
          </div>

          <p className="text-sm font-bold sm:text-base md:text-lg">
            Dev{" "}
            <span className="bg-linear-to-r from-brand-start via-brand-middle to-brand-end bg-clip-text text-transparent">
              Stack
            </span>
          </p>
        </div>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-high">
          <li>
            <a className="text-sm text-brand-middle lg:text-base">Home</a>
          </li>
          <li>
            <a className="text-sm lg:text-base">Technologies</a>
          </li>
          <li>
            <a className="text-sm lg:text-base">Projects</a>
          </li>
          <li>
            <a className="text-sm lg:text-base">About</a>
          </li>
          <li>
            <a className="text-sm lg:text-base">Contact</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-1 sm:gap-2">
        <a className="btn btn-ghost btn-xs rounded-full text-[10px] sm:btn-sm sm:text-xs md:text-md lg:text-base text-med">
          Sign In
        </a>

        <a className="btn btn-xs rounded-full bg-brand-middle text-[10px] text-white sm:btn-sm sm:text-xs md:text-md lg:text-base">
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
