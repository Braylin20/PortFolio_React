import {AboutMe} from "./AboutMe.jsx";
import {Projects} from "./Projects.jsx";
import {InformationCard} from "./InformationCard.jsx";

export const MainSection = () => {
    return (
        <>
            <section className=" p-10 overflow-y-auto flex flex-col gap-72 h-screen">
                <AboutMe/>
                <InformationCard/>
                <Projects/>
            </section>
        </>
    );


}