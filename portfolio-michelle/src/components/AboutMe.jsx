


export const AboutMe = () => {
  return(
      <>
          <div className="flex justify-center gap-4">
              <div className="flex justify-between items-center">
                  <section className="flex flex-col gap-4 max-w-[70%]">
                      <h2 className="text-3xl mb-8 relative w-fit">
                          About me
                          <div
                              className="absolute bottom-[-10px] left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"></div>
                      </h2>


                      <p className="text-lg">
                          Architect with 4 years of professional experience involved in
                          Residential/Tourist/Interior Design Projects.<br/>
                          Has participated in different areas of architecture such as Interior
                          Design, Landscape Design, Residential and commercial Design.<br/>
                          She is a driven, proactive, diligent, team-minded, and detailed-oriented
                          professional with a big sense of commitment and responsibility.<br/><br/>
                          Her main skills include team leading, visualization, renders, designs,
                          big-scale construction, commercial design, residential, and interior
                          design renderings.<br/><br/>

                      </p>
                  </section>

                  <div className="">
                      <img
                          className="w-56 rounded-full"
                          src="../public/img/MichelleProfile.png"
                          alt="Foto de perfil"
                      />
                  </div>

              </div>


          </div>
      </>
  )
}