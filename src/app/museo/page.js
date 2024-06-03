"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';
import AudioPlayer from '@/components/Audio';


function Museo() {
    const [textoEsp, cambEsp] = useState('');
    const [textoIng, cambIng] = useState('');
    const [img, cambImg] = useState('/assets/español.jpg')
    const [audioSrc, setAudioSrc] = useState('/audios/MuseoEspañol.mp3');

    const images = [
        "museo-banner.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEsp(`Esta iglesia, perteneciente al siglo XVIII, se caracteriza por tener una arquitectura en miniatura aunque conserva todos los componentes propios de un templo conventual. Presenta planta de cruz latina con tres naves, crucero y ábside cuadrangular. Posee una portada elegante y ordenada también del siglo XVIII. En ella se conservan diferentes esculturas en madera tallada y policromada y óleos sobre lienzo, todos de la misma época de su construcción. En la actualidad, este espacio acoge el Museo Antonio Villa-Toro, pintor internacional castreño adscrito a la plástica expresionista.
`);
        cambIng(`This church, belonging to the 18th century, is characterized by having miniature architecture although it preserves all the components of a conventual temple. It has a Latin cross plan with three naves, a transept and a quadrangular apse. It has an elegant and orderly cover also from the 18th century. It houses different sculptures in carved and polychrome wood and oil paintings on canvas, all from the same period of its construction. Currently, this space houses the Antonio Villa-Toro Museum, an international painter from Castro assigned to expressionist art.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEsp('');
            cambIng(`This church, belonging to the 18th century, is characterized by having miniature architecture although it preserves all the components of a conventual temple. It has a Latin cross plan with three naves, a transept and a quadrangular apse. It has an elegant and orderly cover also from the 18th century. It houses different sculptures in carved and polychrome wood and oil paintings on canvas, all from the same period of its construction. Currently, this space houses the Antonio Villa-Toro Museum, an international painter from Castro assigned to expressionist art.`);
            setAudioSrc('/audios/MuseoIngles.mp3')
            cambImg('/assets/ingles.png');
        } else {
            cambEsp(`Esta iglesia, perteneciente al siglo XVIII, se caracteriza por tener una arquitectura en miniatura aunque conserva todos los componentes propios de un templo conventual. Presenta planta de cruz latina con tres naves, crucero y ábside cuadrangular. Posee una portada elegante y ordenada también del siglo XVIII. En ella se conservan diferentes esculturas en madera tallada y policromada y óleos sobre lienzo, todos de la misma época de su construcción. En la actualidad, este espacio acoge el Museo Antonio Villa-Toro, pintor internacional castreño adscrito a la plástica expresionista.`);
            cambIng('');
            setAudioSrc('/audios/MuseoEspañol.mp3');
            cambImg('/assets/español.jpg');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/museo-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Museo Antonio Villa-Toro
                </h1>
            </div>
            <div className="w-full text-right">
                <button onClick={changeLanguage} className="inline-flex items-center justify-center mt-4 text-base md:text-lg font-semibold text-black border-2 border-black hover:bg-[#043c54] transition-all duration-200 focus:bg-[#043c54] hover:text-[#f3bc04] hover:border-[#f3bc04]">
                    <img src={img} alt="Change Language" className="w-10 h-10" />
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

            {/* Añadir el componente AudioPlayer aquí */}
            <div className="mt-8">
                <AudioPlayer src={audioSrc} />
            </div>

            <Carousel images={images} />


        </section>
    );
}

export default Museo;