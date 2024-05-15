"use client";

function cambio(num) {
    switch (num) {

        case 1:
            let parrafo = document.getElementById("celda-es");
            let id = parrafo.getAttribute("id");
            if (id !== "celda-in") {
                parrafo.setAttribute("id", "celda-in");
                // Cambiar el contenido HTML del párrafo
                parrafo.innerHTML = `
            <div class="bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url('/banner.jpg')]'>
                <h1 class="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Celda de Cervantes
                </h1>
            </div>
            <section id="celda-en" class="w-full md:flex gap-3 items-center mt-0">
                <div class="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
                    <h1 class="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORY</h1>
                    <p class="text-lg md:text-lg md:mb-4">In what is now considered the Town Hall, Miguel de Cervantes was imprisoned, and according to the prestigious Cervantes scholar Caravaggio, the first pages of "Don Quixote" were gestated here. <br></br>
                        Cervantes seized 200 fanegas of wheat from a canon and the City Council in Castro del Rio, as well as 1,489 and a half fanegas of wheat, as well as cereals belonging to the church. <br></br>
                        Through the mediation of Diego de Valvovia, Cervantes obtained the position of royal commissioner of supplies for the Invincible Armada. Later, he would be tasked with collecting overdue taxes in Granada, having once again been denied the position in the Indies that he had reapplied for in 1590. <br></br>
                        These jobs would force him to endure, until the end of the century, a mercantilist wandering in the south, even suffering imprisonment in Castro del Rio during 1592.
                    </p>
                </div>
                <img src='' class='w-full md:w-1/2 h-50 object-cover' alt="Craftsmanship Details" />
            </section>
        `;
                break;
            }
    }
}

export default cambio
