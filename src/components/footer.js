async function Footer() {
    return (
        <footer className="bg-black mt-2 md:mt-8">
            <section className="w-full flex flex-col md:flex-row py-6">
                <div className="md:w-1/3 w-full flex flex-col items-center mb-4 md:mb-0">
                    <div className="flex ml-16 mb-5">
                        <img src="assets/github.png" className="w-7 mr-2" />
                        <a href="https://github.com/RCE04" className="text-white flex-col items-center mr-16 pt-0.5">Hecho por Rodrigo Cabello Erencia</a>
                    </div>

                    <div className="flex ml-16">
                        <img src="assets/gmail.png" className="w-7 mr-2" />
                        <a href="mailto:secretaria@castrodelrio.es" className="text-white flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">secretaria@castrodelrio.es</a>
                    </div>
                </div>

                <div className="w-full md:w-[2px] md:h-15 bg-white/50 mb-4 md:mb-0"></div>

                <div className="md:w-1/3 w-full flex flex-col items-center mb-4 md:mb-0 ">
                    <div className="flex flex-col mx-10">
                        <img src="logo2.png" alt="Logo" className="w-14 mx-auto" />
                        <a href="/" className="text-white  flex-col items-center mx-auto pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">Ayuntamiento de Castro del rio</a>
                    </div>
                </div>

                <div className="w-full md:w-[2px] md:h-15 bg-white/50 mb-4 md:mb-0"></div>

                <div className="md:w-1/3 w-full flex flex-col items-center">
                    <div className="flex ml-16 mb-5 mr-2">
                        <img src="assets/social.png" alt="WhatsApp" className="w-7" />
                        <a href="tel:+34722341235" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">+34 722-341-235</a>
                    </div>
                    <div className="flex ml-16">
                        <img src="assets/localizacion.png" alt="Icono Localizacion" className="w-7 mr-2" />
                        <a href="https://maps.app.goo.gl/nwFXnRMp9i1g8fgz9" className="text-white  flex-col items-center mr-16 pt-0.5 hover:text-[#f3bc04] hover:underline decoration-current[#f3bc04]">C. Don Andrés J. Criado, 1</a>
                    </div>
                </div>
            </section>

        </footer>
    );
}

export default Footer