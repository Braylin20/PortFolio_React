import {NavLink} from "react-router";


export const SideBar = () => {
  return (
      <>
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
      </>
  )
}