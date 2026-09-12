import { use, type Dispatch, type SetStateAction } from "react";
import type { TechnologyType } from "../../Types/technologyType";
import Technology from "../TechnologyCard/TechnologyCard";

interface TechnologiesListProps {
  technologyPromise: Promise<TechnologyType[]>;
  technologyStack: TechnologyType[];
  setTechnologyStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const TechnologiesList = ({
  technologyPromise,
  technologyStack,
  setTechnologyStack,
}: TechnologiesListProps) => {
  const technologies = use(technologyPromise);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 lg:gap-5">
      {technologies.map((technology) => (
        <Technology
          key={technology.id}
          technology={technology}
          technologyStack={technologyStack}
          setTechnologyStack={setTechnologyStack}
        />
      ))}
    </div>
  );
};

export default TechnologiesList;
