import type { TechnologyType } from "../../Types/technologyType";


const Technology = ({technology}:{technology: TechnologyType}) => {

    console.log(technology)

    return (
        <div>
            <div className="border p-5 space-y-4"> {/* main div */}
                <div className="flex justify-between">
                    <img className="w-10" src={technology.icon} alt="" />
                    <span className="badge badge-soft">{technology.badge}</span>
                </div>
                <div>
                    <h2>{technology.name}</h2>
                    <p>{technology.description}</p>
                </div>
                <div className="flex justify-between">
                    <span className="badge badge-soft">{technology.category}</span>
                    <span>{technology.difficulty}</span>
                    <span>{technology.rating}</span>
                </div>
                <button className="btn btn-block">Add to Stack</button>
            </div>
        </div>
    );
};

export default Technology;