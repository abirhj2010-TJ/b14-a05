import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types/technologyType";
import StackCard from "../StackCard/StackCard";
import { toast } from "react-toastify";

interface TechnologyProps {
  technologyStack: TechnologyType[];
  setTechnologyStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const YourStack = ({
  technologyStack,
  setTechnologyStack,
}: TechnologyProps) => {
  const handleEmptyStack = () => {
    setTechnologyStack([]);
    toast.success("All technologies removed successfully")
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-low">
        {technologyStack.length === 0
          ? "No Technologies selected yet"
          : `${technologyStack.length} Technologies selected`}
        .
      </p>

      {technologyStack.length === 0 ? (
        <div className="mt-6 flex items-center justify-center py-7 rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
          <p className="text-sm font-medium text-low">
            Your stack is empty
          </p>
        </div>
      ) : (
        <div>
          {technologyStack.map((technology) => (
            <StackCard
              technology={technology}
              technologyStack={technologyStack}
              setTechnologyStack={setTechnologyStack}
            ></StackCard>
          ))}
        </div>
      )}

      <button
        onClick={handleEmptyStack}
        className={`mt-5 btn btn-block border-red-400 text-red-500 font-bold rounded-lg hover:bg-red-300/40 ${technologyStack.length === 0 ? "hidden" : ""}`}
      >
        Remove All
      </button>
    </div>
  );
};

export default YourStack;
