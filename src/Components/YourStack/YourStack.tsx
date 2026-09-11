import type { TechnologyType } from "../../Types/technologyType";

interface TechnologyProps{
    technologyStack: TechnologyType[];
}

const YourStack = ({technologyStack}: TechnologyProps)  => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-900">Your Stack</h2>

      <p className="mt-1 text-sm text-gray-500">
       {technologyStack.length === 0 ? "No Technologies selected yet" : `${technologyStack.length} Technologies selected` } .
      </p>

      {
        technologyStack.length === 0 ? (
            <div className="mt-6 flex items-center justify-center py-7 rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
        <p className="text-sm font-medium text-gray-400">Your stack is empty</p>
      </div>

        ) : (
            <div>
        {
            technologyStack.map(technology => <h2>{technology.name}</h2>)
        }
      </div>
        )
      }
      
    </div>
  );
};

export default YourStack;
