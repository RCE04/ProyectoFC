"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';


function Castillo() {
    const [textoEsp, cambEsp] = useState('');
    const [textoIng, cambIng] = useState('');

    const images = [
        "castillo1.jpg",
        "castillo2.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEsp(`No podemos obviar en esta torre cilíndrica las pinturas realizadas durante la Guerra Civil, cuando el castillo fue utilizado para localizar en él un punto de radiodifusión , con inscripciones relativas al funcionamiento del mismo y alabanzas al bando nacional. El resto de torres que jalonan la muralla son cuadradas y están construidas como los lienzos, con mampostería y tapial, presentando sillares en las esquinas. La única entrada es una puerta en arco de medio punto, con dovelas y sillares bastante bien labrados. Junto a esta puerta está la torre principal, del Homenaje, maciza, de tapial. Tiene una cámara superior, cubierta por bóveda vaída. Las restantes torres están desmochadas.
`);
        cambIng(`We cannot ignore in this cylindrical tower the paintings made during the Civil War, when the castle was used to locate a radio broadcasting point, with inscriptions relating to its operation and praise to the national side. The rest of the towers that mark the wall are square and are built like the canvases, with masonry and mud, presenting ashlars in the corners. The only entrance is a semicircular arch door, with voussoirs and fairly well-carved ashlars. Next to this door is the main tower, the Homenaje, solid, made of rammed earth. It has an upper chamber, covered by a hollow vault. The remaining towers are demolished.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEsp('');
            cambIng(`We cannot ignore in this cylindrical tower the paintings made during the Civil War, when the castle was used to locate a radio broadcasting point, with inscriptions relating to its operation and praise to the national side. The rest of the towers that mark the wall are square and are built like the canvases, with masonry and mud, presenting ashlars in the corners. The only entrance is a semicircular arch door, with voussoirs and fairly well-carved ashlars. Next to this door is the main tower, the Homenaje, solid, made of rammed earth. It has an upper chamber, covered by a hollow vault. The remaining towers are demolished.`);
        } else {
            cambEsp(`No podemos obviar en esta torre cilíndrica las pinturas realizadas durante la Guerra Civil, cuando el castillo fue utilizado para localizar en él un punto de radiodifusión , con inscripciones relativas al funcionamiento del mismo y alabanzas al bando nacional. El resto de torres que jalonan la muralla son cuadradas y están construidas como los lienzos, con mampostería y tapial, presentando sillares en las esquinas. La única entrada es una puerta en arco de medio punto, con dovelas y sillares bastante bien labrados. Junto a esta puerta está la torre principal, del Homenaje, maciza, de tapial. Tiene una cámara superior, cubierta por bóveda vaída. Las restantes torres están desmochadas.`);
            cambIng('');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/castillo-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Castillo-Muralla
                </h1>
            </div>

            <div className="w-full text-right">
                <button onClick={changeLanguage} className="text-right">
                    Cambiar Idioma
                </button>
            </div>

            <section id="celda-es" className="w-full md:flex gap-3 items-center mt-0">
                <div className="w-full md:mx-8 mt-4 md:mt-0 mx-auto text-pretty">
                    <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORIA</h1>
                    <p className="text-lg md:text-lg md:mb-4">
                        {textoEsp || textoIng}
                    </p>
                </div>
            </section>


            <Carousel images={images} />


        </section>
    );
}

export default Castillo;