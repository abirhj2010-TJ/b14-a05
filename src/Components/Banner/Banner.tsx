import banner_img from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="container mx-auto mt-6 md:mt-10 lg:mt-14 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6 lg:gap-8 items-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold text-center md:text-start mb-4 md:mb-5 ">
            Build Your Ideal <span className="bg-linear-to-r from-brand-start via-brand-middle/80 to-brand-end bg-clip-text text-transparent">
              Development Stack
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-base lg:text-lg text-center md:text-start max-w-sm sm:max-w-lg md:max-w-md lg:max-w-xl mb-6 md:mb-8 lg:mb-10 text-high">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>

          <div className="flex gap-2 md:gap-3 lg:gap-5">
            <button className="btn rounded-md px-3 md:px-5 lg:px-7 bg-linear-to-r from-brand-start/70 via-brand-middle to-brand-end text-white">
              Explore Technologies
            </button>

            <button className="btn rounded-md px-3 md:px-5 lg:px-7 border-brand-middle bg-transparent text-brand-middle hover:bg-brand-middle/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <img
            src={banner_img}
            alt="Development stack"
            className=" sm:w-[70%] md:w-full lg:max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
