import { FaStar } from "react-icons/fa";
import type { TechnologyType } from "../../Types/technologyType";
import "../../index.css";

const Technology = ({ technology }: { technology: TechnologyType }) => {


  return (
    <div className="space-y-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm flex flex-col justify-between">
      <div className="flex items-center justify-between">
        <img
          className="h-10 w-10 object-contain"
          src={technology.icon}
          alt={technology.name}
        />

        <span
          className={`badge border-0 px-3 py-3 font-medium ${
            technology.category === "Frontend"
              ? "bg-tech-blue/10 text-tech-blue"
              : technology.category === "Backend"
                ? "bg-tech-green/10 text-tech-green"
                : technology.category === "Database"
                  ? "bg-tech-purple/10 text-tech-purple"
                  : technology.category === "Language"
                    ? "bg-tech-cyan/10 text-tech-cyan"
                    : technology.category === "Styling"
                      ? "bg-tech-blue/10 text-tech-blue"
                      : technology.category === "DevOps"
                        ? "bg-tech-purple/10 text-tech-purple"
                        : "bg-tech-orange/10 text-tech-orange"
          }`}
        >
          {technology.badge}
        </span>
      </div>

      <div className="space-y-2 flex flex-col flex-1">
        <h2 className="text-xl font-bold text-gray-900">{technology.name}</h2>

        <p className="text-sm leading-6 text-gray-500">
          {technology.description}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-gray-100 pt-4">
        <span className="badge badge-ghost px-3 py-3">
          {technology.category}
        </span>

        <span className="text-sm font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 font-semibold text-gray-700">
          <FaStar className="text-yellow-400" />
          {technology.rating}
        </span>
      </div>

      <button className="btn btn-block border-0 bg-black text-white rounded-lg">
        Add to Stack
      </button>
    </div>
  );
};

export default Technology;
