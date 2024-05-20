"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';


function Celda() {
    const [textoEsp, cambEs] = useState('');
    const [textoIng, cambIng] = useState('');

    const images = [
        "celda3.jpg",
        "celda1.jpg",
        "celda2.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEs(`En lo que hoy se considera el Ayuntamiento, estuvo preso, y según el prestigioso cervanista Caravaggio se gestaron las primeras páginas de "El Quijote". Cervantes embargó en Castro del Río 200 fanegas de trigo a un canónigo y al Concejo, justicia y regimiento de la villa y 1.489 fanegas y media de trigo, así como cereales de propiedad eclesiástica. Cervantes obtiene por mediación de Diego de Valvovia, el cargo de comisario real de abastos para la Armada Invencible. Más tarde sería encargado de recaudar las tasas atrasadas en Granada, habiéndose denegado una vez más el oficio en Indias que había vuelto a solicitar en 1590. Estos empleos lo arrostrarían a soportar hasta finales del siglo, un vagabundeo mercantilista por el sur llegando a sufrir encarcelamiento en Castro del Río durante 1592.`);
        cambIng(`In what is now considered the Town Hall, Miguel de Cervantes was imprisoned, and according to the prestigious Cervantes scholar Caravaggio, the first pages of "Don Quixote" were gestated here. Cervantes seized 200 fanegas of wheat from a canon and the City Council in Castro del Río, as well as 1,489 and a half fanegas of wheat, as well as cereals belonging to the church. Through the mediation of Diego de Valvovia, Cervantes obtained the position of royal commissioner of supplies for the Invincible Armada. Later, he would be tasked with collecting overdue taxes in Granada, having once again been denied the position in the Indies that he had reapplied for in 1590. These jobs would force him to endure, until the end of the century, a mercantilist wandering in the south, even suffering imprisonment in Castro del Río during 1592.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEs('');
            cambIng(`In what is now considered the Town Hall, Miguel de Cervantes was imprisoned, and according to the prestigious Cervantes scholar Caravaggio, the first pages of "Don Quixote" were gestated here. Cervantes seized 200 fanegas of wheat from a canon and the City Council in Castro del Río, as well as 1,489 and a half fanegas of wheat, as well as cereals belonging to the church. Through the mediation of Diego de Valvovia, Cervantes obtained the position of royal commissioner of supplies for the Invincible Armada. Later, he would be tasked with collecting overdue taxes in Granada, having once again been denied the position in the Indies that he had reapplied for in 1590. These jobs would force him to endure, until the end of the century, a mercantilist wandering in the south, even suffering imprisonment in Castro del Río during 1592.`);
        } else {
            cambEs(`En lo que hoy se considera el Ayuntamiento, estuvo preso, y según el prestigioso cervanista Caravaggio se gestaron las primeras páginas de "El Quijote". Cervantes embargó en Castro del Río 200 fanegas de trigo a un canónigo y al Concejo, justicia y regimiento de la villa y 1.489 fanegas y media de trigo, así como cereales de propiedad eclesiástica. Cervantes obtiene por mediación de Diego de Valvovia, el cargo de comisario real de abastos para la Armada Invencible. Más tarde sería encargado de recaudar las tasas atrasadas en Granada, habiéndose denegado una vez más el oficio en Indias que había vuelto a solicitar en 1590. Estos empleos lo arrostrarían a soportar hasta finales del siglo, un vagabundeo mercantilista por el sur llegando a sufrir encarcelamiento en Castro del Río durante 1592.`);
            cambIng('');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/celda-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Celda de Cervantes
                </h1>
            </div>

            <button onClick={changeLanguage} className="text-right">
                Cambiar Idioma
            </button>

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

export default Celda;