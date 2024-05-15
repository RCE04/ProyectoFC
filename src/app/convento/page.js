
"use client";
import React, { useState, useEffect } from 'react';

function Torre() {
    const [textoEs, cambEs] = useState('');
    const [textoEn, cambEn] = useState('');

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEs(`Del antiguo Convento de Santo Domingo de Scala Coeli, datado en el siglo XVII, solo conservamos la torre del campanario, formada por un cuerpo prismático liso y rematada por el cuerpo de campanas. Nos referimos a un grandioso templo alzado sobre una planta de cruz latina con capillas laterales y bella decoración de la época. El templo poseía tres naves y una gran portada de piedra almohadillada. La nave central, así como el crucero, eran de gran anchura y altura. Por el contrario, las laterales eran, bajas y estrechas. El Convento fue incendiado durante la Guerra Civil española. Posteriormente, ha sido demolido por completo en 1979 excepto la portada principal, hoy reconvertida para el Hospital Residencia de Jesús Nazareno, y la torre campanario que, como testimonio, se ha conservado. En la actualidad, alberga la Casa de la Cultura y la Juventud, el Museo de Fotografía Antigua Manuel Alba y la Escuela Municipal de Música Joaquín Villatoro.
`);
        cambEn(`From the old Convent of Santo Domingo de Scala Coeli, dating from the 17th century, we only preserve the bell tower, formed by a smooth prismatic body and topped by the body of bells. We are referring to a grandiose temple built on a Latin cross plan with side chapels and beautiful decoration of the time. The temple had three naves and a large cushioned stone doorway. The central nave, as well as the transept, were of great width and height. On the contrary, the lateral ones were low and narrow. The Convent was burned during the Spanish Civil War. Subsequently, it was completely demolished in 1979 except for the main façade, today converted into the Hospital Residencia de Jesús Nazareno, and the bell tower which, as a testimony, has been preserved. Currently, it houses the House of Culture and Youth, the Manuel Alba Museum of Ancient Photography and the Joaquín Villatoro Municipal Music School.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEs !== '') {
            cambEs('');
            cambEn(`From the old Convent of Santo Domingo de Scala Coeli, dating from the 17th century, we only preserve the bell tower, formed by a smooth prismatic body and topped by the body of bells. We are referring to a grandiose temple built on a Latin cross plan with side chapels and beautiful decoration of the time. The temple had three naves and a large cushioned stone doorway. The central nave, as well as the transept, were of great width and height. On the contrary, the lateral ones were low and narrow. The Convent was burned during the Spanish Civil War. Subsequently, it was completely demolished in 1979 except for the main façade, today converted into the Hospital Residencia de Jesús Nazareno, and the bell tower which, as a testimony, has been preserved. Currently, it houses the House of Culture and Youth, the Manuel Alba Museum of Ancient Photography and the Joaquín Villatoro Municipal Music School.`);
        } else {
            cambEs(`Del antiguo Convento de Santo Domingo de Scala Coeli, datado en el siglo XVII, solo conservamos la torre del campanario, formada por un cuerpo prismático liso y rematada por el cuerpo de campanas. Nos referimos a un grandioso templo alzado sobre una planta de cruz latina con capillas laterales y bella decoración de la época. El templo poseía tres naves y una gran portada de piedra almohadillada. La nave central, así como el crucero, eran de gran anchura y altura. Por el contrario, las laterales eran, bajas y estrechas. El Convento fue incendiado durante la Guerra Civil española. Posteriormente, ha sido demolido por completo en 1979 excepto la portada principal, hoy reconvertida para el Hospital Residencia de Jesús Nazareno, y la torre campanario que, como testimonio, se ha conservado. En la actualidad, alberga la Casa de la Cultura y la Juventud, el Museo de Fotografía Antigua Manuel Alba y la Escuela Municipal de Música Joaquín Villatoro.`);
            cambEn('');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/convento-banner.jpg")]'>
                <h1 className="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Convento de Scala Coeli
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

export default Torre;