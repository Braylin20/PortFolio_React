import {AboutMe} from "./AboutMe.jsx";
import {Projects} from "./Projects.jsx";
import {InformationCard} from "./InformationCard.jsx";
import {SideBar} from "./SideBar.jsx";

export const MainSection = () => {
    return (
        <>
            <SideBar/>

            <section className=" p-10 flex flex-col items-center  ">
                <div className="w-[70%] flex flex-col gap-32">

                    <AboutMe/>
                    <InformationCard/>
                    <Projects/>
                </div>
            </section>
        </>
    );


}