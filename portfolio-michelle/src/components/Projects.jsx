
import {dataProjects} from "../data/Projects.js";
import {ProjectCard} from "./ProjectCard.jsx";


export const Projects = () => {

    return (
        <>
            <h2 className="text-3xl mb-8 relative w-fit">
                Projects
                <div
                    className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {dataProjects.map(project => (
                    <ProjectCard
                        key={project.projectName}
                        {...project}
                    />
                ))}
            </div>

        </>

    );
}