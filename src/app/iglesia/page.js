"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';
import AudioPlayer from '@/components/Audio';


function Iglesia() {
    const [textoEsp, cambEsp] = useState('');
    const [textoIng, cambIng] = useState('');
    const [audioSrc, setAudioSrc] = useState('');

    const images = [
        "iglesia1.jpg",
        "iglesia2.jpg",
        "iglesia3.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEsp(`El origen de este templo conventual se remonta a 1554, año en el que se fundó por parte de la Orden de los Carmelitas Descalzos. La Iglesia de Nuestra Señora del Carmen acoge obras escultóricas de gran relevancia, como la talla del Cristo de la Misericordia, obra de Castillo Lastrucci, la imagen de María Santísima de la Soledad de 1944 y el Santo Sepulcro, procesionadas en la Semana Santa durante la noche del Viernes Santo. Se trata de un templo de una sola nave abovedada de medios cañones, con esbelto crucero de cortos brazos, centrado por cúpula y ábside cuadrado. En el exterior de la iglesia encontramos dos portadas, de las que la principal está realizada en ladrillo, con pilastras y molduras, y en las que podemos observar el escudo del Carmelo. También se conserva, adosado a la iglesia, el patio interior porticado del antiguo Convento, con arquerías de medio punto sobre columnas.
`);
        cambIng(`The origin of this conventual temple dates back to 1554, the year in which it was founded by the Order of the Discalced Carmelites. The Church of Nuestra Señora del Carmen houses highly relevant sculptural works, such as the carving of the Christ of Mercy, the work of Castillo Lastrucci, the image of María Santísima de la Soledad from 1944 and the Holy Sepulchre, processed in Holy Week during the Good Friday night. It is a temple with a single vaulted nave with half-barrels, with a slender transept with short arms, centered by a dome and a square apse. On the outside of the church we find two doorways, of which the main one is made of brick, with pilasters and moldings, and in which we can see the coat of arms of Carmel. Also preserved, attached to the church, is the porticoed interior patio of the old Convent, with semicircular arches on columns.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEsp('');
            cambIng(`The origin of this conventual temple dates back to 1554, the year in which it was founded by the Order of the Discalced Carmelites. The Church of Nuestra Señora del Carmen houses highly relevant sculptural works, such as the carving of the Christ of Mercy, the work of Castillo Lastrucci, the image of María Santísima de la Soledad from 1944 and the Holy Sepulchre, processed in Holy Week during the Good Friday night. It is a temple with a single vaulted nave with half-barrels, with a slender transept with short arms, centered by a dome and a square apse. On the outside of the church we find two doorways, of which the main one is made of brick, with pilasters and moldings, and in which we can see the coat of arms of Carmel. Also preserved, attached to the church, is the porticoed interior patio of the old Convent, with semicircular arches on columns.`);
            setAudioSrc('/path_to_your_english_audio_file.mp3');
        } else {
            cambEsp(`El origen de este templo conventual se remonta a 1554, año en el que se fundó por parte de la Orden de los Carmelitas Descalzos. La Iglesia de Nuestra Señora del Carmen acoge obras escultóricas de gran relevancia, como la talla del Cristo de la Misericordia, obra de Castillo Lastrucci, la imagen de María Santísima de la Soledad de 1944 y el Santo Sepulcro, procesionadas en la Semana Santa durante la noche del Viernes Santo. Se trata de un templo de una sola nave abovedada de medios cañones, con esbelto crucero de cortos brazos, centrado por cúpula y ábside cuadrado. En el exterior de la iglesia encontramos dos portadas, de las que la principal está realizada en ladrillo, con pilastras y molduras, y en las que podemos observar el escudo del Carmelo. También se conserva, adosado a la iglesia, el patio interior porticado del antiguo Convento, con arquerías de medio punto sobre columnas.`);
            cambIng('');
            setAudioSrc('/español.mp3');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/inglesia-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Iglesia de Nuestra Señora del Carmen
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

            {/* Añadir el componente AudioPlayer aquí */}
            <div className="mt-8">
                <AudioPlayer src={audioSrc} />
            </div>

            <Carousel images={images} />

        </section>
    );
}

export default Iglesia;