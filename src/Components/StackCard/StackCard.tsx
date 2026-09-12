import { IoCloseSharp } from "react-icons/io5";
import type { TechnologyType } from "../../Types/technologyType";
import type { Dispatch, SetStateAction } from "react";
import { toast } from "react-toastify";

interface StackCardProps {
  technology: TechnologyType;
  technologyStack: TechnologyType[];
  setTechnologyStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const StackCard = ({ technology, technologyStack, setTechnologyStack }: StackCardProps) => {



    const handleRemove = () => {
        const remainingStack = technologyStack.filter(tech => tech.id !== technology.id);

        setTechnologyStack(remainingStack);

        toast.success(`${technology.name} removed successfully`)
    }

  return (
    <div className="mt-5 flex items-center justify-between rounded-xl border border-gray-200 bg-white p-3 shadow-sm hover:border-brand-start">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-50">
          <img src={technology.icon} alt={technology.name} />
        </div>

        <div>
          <h2 className="text-sm font-semibold text-gray-900">
            {technology.name}
          </h2>

          <p className="text-xs text-gray-500">{technology.category}</p>
        </div>
      </div>

      <button onClick={handleRemove} className="rounded-full text-gray-400 hover:bg-red-50 hover:text-red-500">
        <IoCloseSharp size={20} />
      </button>
    </div>
  );
};

export default StackCard;
