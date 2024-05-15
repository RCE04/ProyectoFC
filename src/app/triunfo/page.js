"use client";
import React, { useState, useEffect } from 'react';

function Triunfo() {
    const [textoEs, cambEs] = useState('');
    const [textoEn, cambEn] = useState('');

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEs(`Este monumento de impronta neoclásica, de autor desconocido, fue construido entre los siglos XVIII y XIX, debido a la influencia que llegaba desde Córdoba, ciudad donde el Arcángel es Custodio. Fuera de las fronteras de la capital cordobesa, es el único Triunfo erigido a San Rafael. Está construido en una plaza y consta de un pedestal que soporta otro más estrecho, seguido de una esbelta columna estriada coronada por un capitel corintio, en la que una peana sirve de base a la figura del Arcángel. La inscripción nos dice que fue reedificado en 1884. Estas modificaciones se limitaron, según hemos podido conocer, a la colocación de la verja actual con barras de hierro con terminaciones puntiagudas y a la construcción del basamento sobre el que se asienta, con objeto de proteger el conjunto monumenta.
`);
        cambEn(`This monument with a neoclassical imprint, of unknown author, was built between the 18th and 19th centuries, due to the influence that came from Córdoba, the city where the Archangel is Custodian. Outside the borders of the capital of Cordoba, it is the only Triunfo erected in San Rafael. It is built in a square and consists of a pedestal that supports a narrower one, followed by a slender fluted column crowned by a Corinthian capital, on which a pedestal serves as a base for the figure of the Archangel. The inscription tells us that it was rebuilt in 1884. These modifications were limited, as we have learned, to the placement of the current fence with iron bars with pointed ends and the construction of the basement on which it sits, in order to protect the monument complex.
        `);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEs !== '') {
            cambEs('');
            cambEn(`This monument with a neoclassical imprint, of unknown author, was built between the 18th and 19th centuries, due to the influence that came from Córdoba, the city where the Archangel is Custodian. Outside the borders of the capital of Cordoba, it is the only Triunfo erected in San Rafael. It is built in a square and consists of a pedestal that supports a narrower one, followed by a slender fluted column crowned by a Corinthian capital, on which a pedestal serves as a base for the figure of the Archangel. The inscription tells us that it was rebuilt in 1884. These modifications were limited, as we have learned, to the placement of the current fence with iron bars with pointed ends and the construction of the basement on which it sits, in order to protect the monument complex.
            `);
        } else {
            cambEs(`Este monumento de impronta neoclásica, de autor desconocido, fue construido entre los siglos XVIII y XIX, debido a la influencia que llegaba desde Córdoba, ciudad donde el Arcángel es Custodio. Fuera de las fronteras de la capital cordobesa, es el único Triunfo erigido a San Rafael. Está construido en una plaza y consta de un pedestal que soporta otro más estrecho, seguido de una esbelta columna estriada coronada por un capitel corintio, en la que una peana sirve de base a la figura del Arcángel. La inscripción nos dice que fue reedificado en 1884. Estas modificaciones se limitaron, según hemos podido conocer, a la colocación de la verja actual con barras de hierro con terminaciones puntiagudas y a la construcción del basamento sobre el que se asienta, con objeto de proteger el conjunto monumenta.`);
            cambEn('');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/triunfo-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Triunfo de San Rafael
                </h1>
            </div>

            <div className="w-full text-right">
                <button onClick={changeLanguage} className="text-right">
                    Cambiar Idioma
                </button>
            </div>

            <section id="celda-es" className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
                    <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORIA</h1>
                    <p className="text-lg md:text-lg md:mb-4">
                        {textoEs || textoEn}
                    </p>
                </div>
                <img src='celda.jpg' className='w-full md:w-[50%] h-50 object-cover' alt="" />
            </section>


            <section id="celda-es" className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
                    <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">IMAGENES</h1>
                </div>
                {/*CARROUSEL*/}
            </section>


        </section>
    );
}

export default Triunfo;