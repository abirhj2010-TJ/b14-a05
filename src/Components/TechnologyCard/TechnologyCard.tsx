import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../Types/technologyType";
import { type Dispatch, type SetStateAction } from "react";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";


interface TechnologyProps {
  technology: TechnologyType;
  technologyStack: TechnologyType[];
  setTechnologyStack: Dispatch<SetStateAction<TechnologyType[]>>;
}



const Technology = ({
  technology,
  technologyStack,
  setTechnologyStack,
}: TechnologyProps) => {
  const isStacked = technologyStack.some((item) => item.id === technology.id);

  const handleAddToStack = () => {
    setTechnologyStack([...technologyStack, technology]);
    toast.success(`${technology.name} added to stack successfully`);
  };

  return (
    <div
      className={`flex flex-col justify-between space-y-5 rounded-xl bg-white p-5 shadow-sm ${
        isStacked ? "border border-brand-start" : "border border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          className="h-10 w-10 object-contain"
          src={technology.icon}
          alt={technology.name}
        />

        <div className="badge font-medium"
        style={{backgroundColor: `${technology.badgeColor}33`, color: `${technology.badgeColor}`}}>
  {technology.badge}
</div>
      </div>

      <div className="flex flex-1 flex-col space-y-2">
        <h2 className="text-xl font-bold text-mainColor">{technology.name}</h2>

        <p className="text-sm leading-6 text-med">{technology.description}</p>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="badge badge-ghost px-3 py-3">
          {technology.category}
        </span>

        <span className="text-sm font-medium text-med">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-semibold text-med">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isStacked}
        className={`btn btn-block rounded-lg ${
          isStacked
            ? "bg-brand-start/10 text-brand-start"
            : "bg-black text-white"
        }`}
      >
        {isStacked ? (
          <>
            <TiTick />
            Added to Stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default Technology;
