import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-50 container mx-auto bg-base-100 px-4 shadow-sm sm:px-6 md:px-8 lg:px-20 xl:px-30">
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
              <a className="text-brand-middle" href="">
                Home
              </a>
            </li>
            <li>
              <a href="">Technologies</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="ml-1 hidden items-center gap-1.5 sm:gap-2 md:flex">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-linear-to-tr from-brand-start/50 via-brand-middle/80 to-brand-end text-md font-bold text-white">
            DS
          </div>

          <p className="text-lg font-bold">
            Dev <span className="bg-linear-to-r from-brand-start via-brand-middle to-brand-end bg-clip-text text-transparent">
              Stack
            </span>
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1 md:hidden">
        <div className="flex h-5 w-5 items-center justify-center rounded-md bg-linear-to-tr from-brand-start/50 via-brand-middle/80 to-brand-end text-[9px] font-bold text-white sm:h-6 sm:w-6 sm:text-xs">
          DS
        </div>

        <p className="text-xs font-bold sm:text-sm">
          Dev <span className="bg-linear-to-r from-brand-start via-brand-middle to-brand-end bg-clip-text text-transparent">
            Stack
          </span>
        </p>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 font-semibold text-high">
          <li>
            <a className="text-sm text-brand-middle lg:text-base" href="">
              Home
            </a>
          </li>
          <li>
            <a className="text-sm lg:text-base" href="">
              Technologies
            </a>
          </li>
          <li>
            <a className="text-sm lg:text-base" href="">
              Projects
            </a>
          </li>
          <li>
            <a className="text-sm lg:text-base" href="">
              About
            </a>
          </li>
          <li>
            <a className="text-sm lg:text-base" href="">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-1 sm:gap-2">
        <a
          className="btn btn-ghost rounded-full text-[9px] text-med btn-sm md:btn-md md:text-md lg:text-base"
          href=""
        >
          Sign In
        </a>

        <a
          className="btn rounded-full bg-brand-middle text-[9px] text-white btn-sm md:btn-md md:text-md lg:text-base"
          href=""
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};

export default Navbar;
