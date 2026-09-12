import banner_img from "../../assets/banner-stack.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 justify-center items-center mt-7 container mx-auto px-30">
      <div>
        <h2 className="text-6xl font-bold lg:w-xl mb-5">
          Build Your Ideal <span className="bg-linear-to-r from-brand-start via-brand-middle/80 to-brand-end bg-clip-text text-transparent">Development Stack</span>
        </h2>
        <p className="lg:w-md mb-12 text-high">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="space-x-3">
          <button className="btn rounded-md px-7 bg-linear-to-r from-brand-start/70 via-brand-middle to-brand-end text-white">Explore Technologies</button>
          <button className="btn rounded-md px-10">Learn More</button>
        </div>
      </div>

      <div className="flex justify-end items-center">
        <img src={banner_img} alt="" />
      </div>
    </div>
  );
};

export default Banner;
