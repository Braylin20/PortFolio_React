import {NavLink, Outlet} from "react-router";
import {useEffect} from "react";
import {AboutMe} from "./AboutMe.jsx";
import {Projects} from "./Projects.jsx";


export const MainSection = () => {
    const Snowflakes = () => {
        useEffect(() => {
            function createSnowflake() {
                const snowflake = Object.assign(
                    document.createElement('div'),
                    {
                        className: 'snowflake bg-gradient-to-r from-blue-400 to-blue-600',
                        style: `
                        left: ${Math.random() * window.innerWidth}px;
                        top: -5px;
                        opacity: ${Math.random() * 0.8 + 0.2}; /* Opacidad entre 0.2 y 1 */
                        transform: scale(${Math.random() * 1.5 + 0.5});
                    `
                    }
                );

                document.body.appendChild(snowflake);

                let posY = -5;
                let speed = Math.random() + 1;
                let wobble = 0;

                function fall() {
                    posY += speed;
                    wobble += 0.02;
                    snowflake.style.top = posY + 'px';
                    snowflake.style.left =
                        parseFloat(snowflake.style.left) +
                        Math.sin(wobble) * 2 + 'px';

                    if (posY < window.innerHeight) {
                        requestAnimationFrame(fall);
                    } else {
                        snowflake.remove();
                    }
                }

                fall();
            }

            const interval = setInterval(createSnowflake, 100);

            return () => clearInterval(interval);
        }, []);

        return null;
    };

    return (
        <>
            <div className="relative h-screen flex gap-16 rounded-lg  bg-white overflow-hidden">
                {/* Sección izquierda fija y ocupando espacio */}
                <section className="p-10 min-w-[230px] bg-customGray h-screen flex-shrink-0">
                    <div className="h-full flex flex-col items-center ">
                        <div className="flex flex-col items-center">
                            <img
                                className="w-28 rounded-full"
                                src="../public/img/MichelleProfile.png"
                                alt="Foto de perfil"
                            />
                            <h2>Miriam Oleaga</h2>
                            <span className="text-xs">Arquitecto Especialista BIM</span>
                        </div>

                        <ul className="flex flex-col items-start gap-2 mt-10">
                            <NavLink to="/">-Acerca de mi</NavLink>
                            <NavLink to="projects">-Proyectos</NavLink>
                            <NavLink to="habilidades">-Habilidades</NavLink>
                            <NavLink to="experiencia">-Experiencia laboral</NavLink>
                            <NavLink to="/contact">-Contacto</NavLink>
                        </ul>
                    </div>
                    <footer className="flex justify-between items-center gap-2">
                        <img className="w-6" src="../public/svg/mail.svg" alt="Email"/>
                        <img className="w-5" src="../public/svg/instagram.svg" alt="Instagram"/>
                        <img className="w-5" src="../public/svg/linkedin.svg" alt="LinkedIn"/>
                    </footer>
                </section>

                {/* Sección derecha con scroll */}
                <section className="flex-1 p-10 overflow-y-auto h-screen">
                    <AboutMe/>
                    <Projects/>
                </section>
            </div>
        </>
    );


}