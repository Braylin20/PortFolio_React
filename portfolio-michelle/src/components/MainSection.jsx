import {NavLink, Outlet} from "react-router";
import {useEffect} from "react";


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
          opacity: ${Math.random()};
          transform: scale(${Math.random() * 1.5 + 0.5});`
                    }
                );

                document.body.appendChild(snowflake);

                let posY = -5;
                let speed = Math.random()  + 1;
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
            <Snowflakes />
            <section className="relative w-full h-screen">
                <div className="relative z-20 flex flex-row justify-center items-center gap-10 w-full h-full">
                    <div className="relative w-[80%] h-[95%] flex rounded-lg bg-white overflow-hidden">
                        <div
                            className="absolute top-0 right-0 translate-x-4 -translate-y-1/4 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600"
                            style={{clipPath: "polygon(100% 0, 100% 100%, 0 0)"}}></div>

                        <div
                            className="absolute bottom-0 right-0 translate-x-0 translate-y-1/3 w-32 h-32 bg-gradient-to-r from-blue-400 to-blue-600"
                            style={{clipPath: "polygon(100% 0, 100% 100%, 0 100%)"}}></div>

                        <section className="p-10 min-w-[230px] bg-customGray">
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
                                    <NavLink to="habilidades">-Proyectos</NavLink>
                                    <NavLink to="habilidades">-Habilidades</NavLink>
                                    <NavLink to="experiencia">-Experiencia laboral</NavLink>
                                    <NavLink to="/contact">-Contacto</NavLink>
                                </ul>
                            </div>
                            <footer className="flex justify-between items-center gap-2">
                                    <img className="w-6" src="../public/svg/mail.svg" alt="Telephone"/>
                                    <img className="w-5" src="../public/svg/instagram.svg" alt="Telephone"/>
                                    <img className="w-5" src="../public/svg/linkedin.svg" alt="Telephone"/>
                            </footer>
                        </section>

                        {/* Sección derecha (contenido) */}
                        <section className="ml-16 p-10">
                            <Outlet/>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}