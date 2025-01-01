import {Route, Routes} from "react-router";

import { MainSection} from "../components/MainSection.jsx";
import {Contact} from "../components/Contact.jsx";
import {AboutMe} from "../components/AboutMe.jsx";


export const AppRouter = () => {
  return (
      <>
          <Routes>
              <Route path="/" element={<MainSection />}>
                  <Route path="/" element={<AboutMe />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="projects" element={<div>Proyectos</div>} />
                  <Route path="skills" element={<div>Habilidades</div>} />
                  <Route path="experience" element={<div>Experiencia laboral</div>} />
              </Route>
          </Routes>
      </>
  )
}