import {Route, Routes} from "react-router";

import { MainSection} from "../components/MainSection.jsx";
import {Contact} from "../components/Contact.jsx";
import {AboutMe} from "../components/AboutMe.jsx";
import {Projects} from "../components/Projects.jsx";
import {ProjectPresentation} from "../components/ProjectPresentation.jsx";


export const AppRouter = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainSection />}>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="projects" element={<Projects/>} />
                  <Route path="projects/presentation" element={<ProjectPresentation/>} />
                  <Route path="skills" element={<div>Habilidades</div>} />
                  <Route path="experience" element={<div>Experiencia laboral</div>} />
              </Route>
          </Routes>
      </>
  )
}