import {useState} from "react";


export const Projects = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <h2 className="text-3xl mb-8 relative w-fit">
                Proyects
                <div
                    className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
            </h2>
            <div className="grid grid-rows-4 grid-flow-col gap-4">
                <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src="public/img/OvreBuilding.png" alt=""/>
                    </a>
                    <div className="px-3 mt-2">
                        <h4 className="font-bold text-lg">Ovre Building</h4>
                        <p
                            className={`content ${isExpanded ? 'expanded' : ''}`}
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: isExpanded ? 'unset' : 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                transition: 'max-height 0.5s ease-out'
                            }}
                        >
                            The integration of balconies in the architectural composition of a residential building is
                            always a great challenge and even more in the case of this project since we wanted to create
                            a
                            building imbued with the industrial architectural language of the neighboring buildings.
                        </p>
                        <span className="read-more-btn mb-8" onClick={toggleText}
                              style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline', marginTop: '5px'}}>
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                </span>
                    </div>
                </div>
                <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src="public/img/OvreBuilding.png" alt=""/>
                    </a>
                    <div className="px-3 mt-2">
                        <h4 className="font-bold text-lg">Ovre Building</h4>
                        <p
                            className={`content ${isExpanded ? 'expanded' : ''}`}
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: isExpanded ? 'unset' : 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                transition: 'max-height 0.5s ease-out'
                            }}
                        >
                            The integration of balconies in the architectural composition of a residential building is
                            always a great challenge and even more in the case of this project since we wanted to create
                            a
                            building imbued with the industrial architectural language of the neighboring buildings.
                        </p>
                        <span className="read-more-btn mb-8" onClick={toggleText}
                              style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline', marginTop: '5px'}}>
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                </span>
                    </div>
                </div>
                <div className="max-w-72 bg-white border border-gray-200 rounded-lg shadow">
                    <a href="#">
                        <img className="rounded-t-lg" src="public/img/OvreBuilding.png" alt=""/>
                    </a>
                    <div className="px-3 mt-2">
                        <h4 className="font-bold text-lg">Ovre Building</h4>
                        <p
                            className={`content ${isExpanded ? 'expanded' : ''}`}
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: isExpanded ? 'unset' : 3,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                transition: 'max-height 0.5s ease-out'
                            }}
                        >
                            The integration of balconies in the architectural composition of a residential building is
                            always a great challenge and even more in the case of this project since we wanted to create
                            a
                            building imbued with the industrial architectural language of the neighboring buildings.
                        </p>
                        <span className="read-more-btn mb-8" onClick={toggleText}
                              style={{color: 'blue', cursor: 'pointer', textDecoration: 'underline', marginTop: '5px'}}>
                    {isExpanded ? 'Ver menos' : 'Ver más'}
                </span>
                    </div>
                </div>
            </div>

        </>

    );
}