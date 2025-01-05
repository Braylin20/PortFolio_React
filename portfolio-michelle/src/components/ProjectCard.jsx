import {NavLink} from "react-router";


export const ProjectCard = ({description, imgName, projectName}) => {
    return(
        <>
            <NavLink to="presentation" className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">

                <img className="rounded-t-lg" src={`/public/img/${imgName}`} alt=""/>

                <div className="px-3 my-4">
                    <h4 className="font-bold text-lg">{projectName}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </NavLink>
        </>
    )
}