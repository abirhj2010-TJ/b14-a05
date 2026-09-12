import { IoCloseSharp } from "react-icons/io5";
import type { TechnologyType } from "../../Types/technologyType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface StackCardProps {
  technology: TechnologyType;
  technologyStack: TechnologyType[];
  setTechnologyStack: Dispatch<SetStateAction<TechnologyType[]>>;
}

const StackCard = ({
  technology,
  technologyStack,
  setTechnologyStack,
}: StackCardProps) => {
  const handleRemove = () => {
    const remainingStack = technologyStack.filter(
      (tech) => tech.id !== technology.id
    );

    setTechnologyStack(remainingStack);

    toast.success(`${technology.name} removed successfully`);
  };

  return (
    <div className="mt-4 flex items-center justify-between gap-2 rounded-xl border border-gray-200 bg-white p-2.5 shadow-sm hover:border-brand-middle sm:mt-5 sm:p-3">
      <div className="flex items-center gap-1">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 sm:h-10 sm:w-10">
          <img
            src={technology.icon}
            alt={technology.name}
            className="h-5 w-5 object-contain sm:h-6 sm:w-6"
          />
        </div>

        <div>
          <h2 className="text-xs font-semibold text-gray-900 sm:text-sm">
            {technology.name}
          </h2>

          <p className="text-[10px] text-gray-500 sm:text-xs">
            {technology.category}
          </p>
        </div>
      </div>

      <button
        onClick={handleRemove}
        className="shrink-0 rounded-full p-1 text-gray-400 hover:bg-red-50 hover:text-red-500 sm:p-1.5"
      >
        <IoCloseSharp className="text-base sm:text-xl" />
      </button>
    </div>
  );
};

export default StackCard;