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
    <div className="my-20 px-30 container mx-auto">
      <div>
        <h2 className="text-mainColor mb-3 text-4xl font-bold">
          Explore the <span className="bg-linear-to-r from-brand-start to-brand-end bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>

        <p className="text-med mb-10">
          Pick one technology per category to build your ideal stack
        </p>
      </div>

      <div className="flex gap-5">
        <div className="w-3/4">
          <Suspense fallback={<p className="text-center">Loading technologies...</p>}>
            <TechnologiesList
              technologyPromise={technologyPromise}
              technologyStack={technologyStack}
              setTechnologyStack={setTechnologyStack}
            />
          </Suspense>
        </div>

        <div className="w-1/4">
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
