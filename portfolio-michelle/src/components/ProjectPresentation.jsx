import { useParams } from "react-router";
import { dataProjects } from "../data/Projects.js";

export const ProjectPresentation = () => {
    const { projectName } = useParams();
    const { imagesPresentation } = dataProjects.find(project => project.projectName === projectName);

    return (
        <div className="h-screen p-10  flex flex-col justify-center items-center">
            <div className="  p-5 grid grid-cols-3 grid-rows-3 gap-4 rounded-lg overflow-hidden">
                {imagesPresentation.map((imageUrl, index) => (
                    <img
                        src={`/public/ImgProject1/${imageUrl}`}
                        key={index}
                        alt={`Image of ${projectName}`}
                        className={`object-cover w-full h-full rounded-lg 
                            ${index % 4 === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"}
                        `}
                    />
                ))}
            </div>
        </div>
    )
}
