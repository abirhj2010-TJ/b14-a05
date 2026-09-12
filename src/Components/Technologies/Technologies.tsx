import { Suspense, useState } from "react";
import type { TechnologyType } from "../../Types/technologyType";
import TechnologiesList from "../TechnologiesList/TechnologiesList";
import YourStack from "../YourStack/YourStack";

function Technologies({
  technologyPromise,
}: {
  technologyPromise: Promise<TechnologyType[]>;
}) {
  const [technologyStack, setTechnologyStack] = useState<TechnologyType[]>([]);

  return (
    <div className="container mx-auto mt-2 md:mt-8 lg:mt-14 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-30">
      <div className="text-center md:text-start">
        <h2 className="text-mainColor mb-3 text-3xl sm:text-4xl font-bold ">
          Explore the <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-med mb-8 md:mb-10 text-sm sm:text-base">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <Suspense
            fallback={
              <p className="text-center">Loading technologies...</p>
            }
          >
            <TechnologiesList
              technologyPromise={technologyPromise}
              technologyStack={technologyStack}
              setTechnologyStack={setTechnologyStack}
            />
          </Suspense>
        </div>

        <div className="w-full md:w-1/3 lg:w-1/4">
          <YourStack
            technologyStack={technologyStack}
            setTechnologyStack={setTechnologyStack}
          />
        </div>
      </div>
    </div>
  );
}

export default Technologies;