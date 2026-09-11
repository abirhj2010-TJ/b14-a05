import { use, useState } from "react";
import type { TechnologyType } from "../../Types/technologyType";
import Technology from "../Technology/Technology";
import YourStack from "../YourStack/YourStack";

function Technologies({
  technologyPromise,
}: {
  technologyPromise: Promise<TechnologyType[]>;
}) {
  const technologies = use(technologyPromise);

  const [technologyStack, setTechnologyStack] = useState<TechnologyType[]>([]);

  console.log(technologyStack);

  return (
    <div className="my-20 px-30">
      <div>
        <h2 className="text-mainColor font-bold text-4xl mb-3">
          Explore the
          <span className="bg-linear-to-r from-[#EC4899] to-[#8B5CF6] bg-clip-text text-transparent">
            Technologies
          </span>
        </h2>
        <p className="text-med mb-10">
          Pick one technology per category to build your ideal stack
        </p>
      </div>
      <div className="flex gap-5">
        <div className="w-3/4">
          <div className="grid grid-cols-3 gap-5">
            {technologies.map((technology) => (
              <Technology
                key={technology.id}
                technology={technology}
                technologyStack={technologyStack}
                setTechnologyStack={setTechnologyStack}
              ></Technology>
            ))}
          </div>
        </div>
        <div className="w-1/4">
          <YourStack technologyStack = {technologyStack} setTechnologyStack={setTechnologyStack}></YourStack>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
