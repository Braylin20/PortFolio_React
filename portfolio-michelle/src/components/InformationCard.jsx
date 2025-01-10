export const InformationCard = () => {
    return (
        <div className="reveal-animation ">

            <div className="w-full bg-white border border-gray-200 rounded-lg shadow mb-20 ">
                <div className="border-t border-gray-200">
                    <div className="p-4 bg-white rounded-lg md:p-8" role="tabpanel" aria-labelledby="stats-tab">
                        <dl className="grid max-w-screen-xl grid-cols-3 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-3 sm:p-8">
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">5+</dt>
                                <dd>Experience</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">10+</dt>
                                <dd>Projects</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">3</dt>
                                <dd>Languages</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">1</dt>
                                <dd>Master</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">300+</dt>
                                <dd>Followers on Instagram</dd>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <dt className="mb-2 text-3xl font-extrabold">4</dt>
                                <dd>Certifications</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}
