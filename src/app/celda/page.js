"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';
import AudioPlayer from '@/components/Audio';
import ComentariosSection from '@/components/ComentarioSection';

function Celda() {
    const lugar = "Celda de Cervantes";
    const [textoEsp, cambEs] = useState('');
    const [textoIng, cambIng] = useState('');
    const [audioSrc, setAudioSrc] = useState('/audios/CeldaEspañol.mp3');
    const [img, cambImg] = useState('/assets/ingles.png')

    const images = [
        "celda3.jpg",
        "celda1.jpg",
        "celda2.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEs(`En lo que hoy se considera el Ayuntamiento, estuvo preso, y según el prestigioso cervanista Caravaggio se gestaron las primeras páginas de "El Quijote". Cervantes embargó en Castro del Río 200 fanegas de trigo a un canónigo y al Concejo y 1.489 fanegas y media de trigo de propiedad eclesiástica. Cervantes obtiene por mediación de Diego de Valvovia, el cargo de comisario real de abastos para la Armada Invencible. Más tarde sería encargado de recaudar las tasas atrasadas en Granada, habiéndose denegado una vez más el oficio en Indias que había vuelto a solicitar en 1590. Estos empleos lo arrastrarían a soportar hasta finales del siglo, un vagabundeo mercantilista por el sur llegando a sufrir encarcelamiento en Castro del Río durante 1592.`);
        cambIng(`In what is now considered the Town Hall, he was imprisoned, and according to the prestigious Cervanist Caravaggio, the first pages of "Don Quixote" were created. In Castro del Río, Cervantes seized 200 bushels of wheat from a canon and the Council and 1,489 and a half bushels of wheat owned by the church. Cervantes obtained, through Diego de Valvovia, the position of royal commissioner of supplies for the Invincible Armada. Later he would be in charge of collecting arrears taxes in Granada, having once again been denied the office in the Indies that he had applied for again in 1590. These jobs would lead him to endure, until the end of the century, a mercantilist wandering through the south, leading to imprisonment. in Castro del Río during 1592.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEs('');
            cambIng(`In what is now considered the Town Hall, Miguel de Cervantes was imprisoned, and according to the prestigious Cervantes scholar Caravaggio, the first pages of "Don Quixote" were gestated here. Cervantes seized 200 fanegas of wheat from a canon and the City Council in Castro del Río, as well as 1,489 and a half fanegas of wheat, as well as cereals belonging to the church. Through the mediation of Diego de Valvovia, Cervantes obtained the position of royal commissioner of supplies for the Invincible Armada. Later, he would be tasked with collecting overdue taxes in Granada, having once again been denied the position in the Indies that he had reapplied for in 1590. These jobs would force him to endure, until the end of the century, a mercantilist wandering in the south, even suffering imprisonment in Castro del Río during 1592.`);
            setAudioSrc('/audios/CeldaIngles.mp3');
            cambImg('/assets/español.png');
        } else {
            cambEs(`En lo que hoy se considera el Ayuntamiento, estuvo preso, y según el prestigioso cervanista Caravaggio se gestaron las primeras páginas de "El Quijote". Cervantes embargó en Castro del Río 200 fanegas de trigo a un canónigo y al Concejo, justicia y regimiento de la villa y 1.489 fanegas y media de trigo, así como cereales de propiedad eclesiástica. Cervantes obtiene por mediación de Diego de Valvovia, el cargo de comisario real de abastos para la Armada Invencible. Más tarde sería encargado de recaudar las tasas atrasadas en Granada, habiéndose denegado una vez más el oficio en Indias que había vuelto a solicitar en 1590. Estos empleos lo arrostrarían a soportar hasta finales del siglo, un vagabundeo mercantilista por el sur llegando a sufrir encarcelamiento en Castro del Río durante 1592.`);
            cambIng('');
            setAudioSrc('/audios/CeldaEspañol.mp3');
            cambImg('/assets/ingles.png');
        }
    };



    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/celda-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Celda de Cervantes
                </h1>
            </div>

            <div className="w-full text-right">
                <button onClick={changeLanguage} className="inline-flex items-center justify-center mt-4 text-base md:text-lg font-semibold text-black border-2 border-black hover:bg-[#043c54] transition-all duration-200 focus:bg-[#043c54] hover:text-[#f3bc04] hover:border-[#f3bc04]">
                    <img src={img} alt="Change Language" className="w-10 h-10" />
                </button>
            </div>
            <section id="celda-es" className="w-full p-5 md:flex gap-3 items-center mt-0">
                <div className="w-full md:mx-8 mt-4 md:mt-0 mx-auto text-pretty">
                    <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORIA</h1>
                    <p className="text-lg p-5 md:text-lg md:mb-4">
                        {textoEsp || textoIng}
                    </p>
                </div>
            </section>

            {/* Añadir el componente AudioPlayer aquí */}
            <div className="mt-8">
                <AudioPlayer src={audioSrc} />
            </div>

            <Carousel images={images} />

            <ComentariosSection lugar={lugar} />

        </section>
    );
}

export default Celda;