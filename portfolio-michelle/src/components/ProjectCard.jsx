import { NavLink } from "react-router";

export const ProjectCard = ({ description, imgName, projectName }) => {
    return (
        <NavLink
            to={`presentation/${projectName}`}
            className="max-w-72 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
        >
            <img
                className="rounded-t-lg w-full object-cover"
                src={`/public/img/${imgName}`}
                alt={projectName}
            />
            <div className="px-3 my-4">
                <h4 className="font-bold text-lg">{projectName}</h4>
                <p>{description}</p>
            </div>
        </NavLink>
    );
};
