import { NavLink } from "react-router";

export const SideBar = () => {
    return (
        <section className="scroll-blur w-full bg-customGray">
            <div className="flex justify-end items-center py-5 w-[70%] mx-auto">
                <ul className="flex items-start gap-8">
                    <NavLink to="/">About me</NavLink>
                    <NavLink to="projects">Projects</NavLink>
                    <NavLink to="habilidades">Abilities</NavLink>
                    <NavLink to="experiencia">Experience</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </ul>
            </div>
        </section>
    );
}
