"use client";
import React, { useState, useEffect } from 'react';
import Carousel from '@/components/carousel';


function Parroquia() {
    const [textoEs, cambEs] = useState('');
    const [textoEn, cambEn] = useState('');

    const images = [
        "parroquia.jpg",
        "parroquia2.jpg",
        "parroquia3.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEs(`La Parroquia de Nuestra Señora de la Asunción está localizada en el núcleo central del barrio de la Villa, situada en la parte más elevada de la población, en las inmediaciones del Castillo. El origen del primitivo de este templo está ligado a la fundación que hizo Fernando III tras la conquista cristiana de este territorio almohade en 1240. Entonces, Castro del Río será nominado como cabeza del arcedianato de la Campiña, algo de lo que se tiene constancia desde el año 1255, lo que viene a poner de manifiesto la preponderancia de la localidad en estos primeros años de repoblamiento. Sin duda, la Parroquia de Nuestra Señora de la Asunción es una de las primeras iglesias rurales del obispado cordobés. Con anterioridad al templo actual, existió otra iglesia cristiana de la que sabemos que estaba dispuesta en sentido transversal a la de hoy, orientada de norte a sur. Esta ubicación podría corresponder a la reutilización durante los primeros años posteriores a la conquista, de la posible mezquita existente de la que hablan algunos autores. Según consta en la Primera Crónica General se deduce que, en 1240, existía en Castro del Río una aljama musulmana. La iglesia se alza en una planta de tres naves, con cabecera triple y con capillas abiertas al lado izquierdo. Las naves se separan entre sí con arcos de medio punto apuntados que apoyan sobre pilares. Por su parte, las cubiertas con bóveda de arista tapan la antigua armadura mudéjar. Los restos más antiguos están localizados en la cabecera del templo, datados posiblemente a finales del siglo XIII o principios del siglo XIV, hecho viene avalado por la tradición cristiana de comenzar a erigir los templos por la cabecera. Las columnas adosadas a los pilares del ábside central son un reaprovechamiento de fustes y capiteles romanos y árabes. Será a partir de este momento cuando la iglesia adopte un plan definitivamente mudéjar, tanto en su planta basilical como en su ábside marcado por un goticismo tosco.
`);
        cambEn(`The Parish of Our Lady of the Assumption is located in the central core of the Villa neighborhood, located in the highest part of the town, in the vicinity of the Castle. The primitive origin of this temple is linked to the foundation made by Ferdinand III after the Christian conquest of this Almohad territory in 1240. Then, Castro del Río will be nominated as head of the archdeaconry of La Campiña, something that has been known since the year 1255, which shows the preponderance of the town in these first years of repopulation. Without a doubt, the Parish of Our Lady of the Assumption is one of the first rural churches of the Cordoba bishopric. Prior to the current temple, there was another Christian church that we know was arranged transversally to the current one, oriented from north to south. This location could correspond to the reuse during the first years after the conquest, of the possible existing mosque that some authors speak of. According to the First General Chronicle, it is deduced that, in 1240, a Muslim aljama existed in Castro del Río. The church stands on a three-nave floor plan, with a triple head and open chapels on the left side. The naves are separated from each other with pointed semicircular arches that rest on pillars. For their part, the roofs with a groin vault cover the old Mudejar armor. The oldest remains are located at the head of the temple, possibly dating to the end of the 13th century or the beginning of the 14th century, a fact supported by the Christian tradition of beginning to erect temples at the head. The columns attached to the pillars of the central apse are a reuse of Roman and Arab shafts and capitals. It will be from this moment on that the church adopts a definitively Mudejar plan, both in its basilica plan and in its apse marked by a rough Gothicism.`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEs !== '') {
            cambEs('');
            cambEn(`The Parish of Our Lady of the Assumption is located in the central core of the Villa neighborhood, located in the highest part of the town, in the vicinity of the Castle. The primitive origin of this temple is linked to the foundation made by Ferdinand III after the Christian conquest of this Almohad territory in 1240. Then, Castro del Río will be nominated as head of the archdeaconry of La Campiña, something that has been known since the year 1255, which shows the preponderance of the town in these first years of repopulation. Without a doubt, the Parish of Our Lady of the Assumption is one of the first rural churches of the Cordoba bishopric. Prior to the current temple, there was another Christian church that we know was arranged transversally to the current one, oriented from north to south. This location could correspond to the reuse during the first years after the conquest, of the possible existing mosque that some authors speak of. According to the First General Chronicle, it is deduced that, in 1240, a Muslim aljama existed in Castro del Río. The church stands on a three-nave floor plan, with a triple head and open chapels on the left side. The naves are separated from each other with pointed semicircular arches that rest on pillars. For their part, the roofs with a groin vault cover the old Mudejar armor. The oldest remains are located at the head of the temple, possibly dating to the end of the 13th century or the beginning of the 14th century, a fact supported by the Christian tradition of beginning to erect temples at the head. The columns attached to the pillars of the central apse are a reuse of Roman and Arab shafts and capitals. It will be from this moment on that the church adopts a definitively Mudejar plan, both in its basilica plan and in its apse marked by a rough Gothicism.`);
        } else {
            cambEs(`La Parroquia de Nuestra Señora de la Asunción está localizada en el núcleo central del barrio de la Villa, situada en la parte más elevada de la población, en las inmediaciones del Castillo. El origen del primitivo de este templo está ligado a la fundación que hizo Fernando III tras la conquista cristiana de este territorio almohade en 1240. Entonces, Castro del Río será nominado como cabeza del arcedianato de la Campiña, algo de lo que se tiene constancia desde el año 1255, lo que viene a poner de manifiesto la preponderancia de la localidad en estos primeros años de repoblamiento. Sin duda, la Parroquia de Nuestra Señora de la Asunción es una de las primeras iglesias rurales del obispado cordobés. Con anterioridad al templo actual, existió otra iglesia cristiana de la que sabemos que estaba dispuesta en sentido transversal a la de hoy, orientada de norte a sur. Esta ubicación podría corresponder a la reutilización durante los primeros años posteriores a la conquista, de la posible mezquita existente de la que hablan algunos autores. Según consta en la Primera Crónica General se deduce que, en 1240, existía en Castro del Río una aljama musulmana. La iglesia se alza en una planta de tres naves, con cabecera triple y con capillas abiertas al lado izquierdo. Las naves se separan entre sí con arcos de medio punto apuntados que apoyan sobre pilares. Por su parte, las cubiertas con bóveda de arista tapan la antigua armadura mudéjar. Los restos más antiguos están localizados en la cabecera del templo, datados posiblemente a finales del siglo XIII o principios del siglo XIV, hecho viene avalado por la tradición cristiana de comenzar a erigir los templos por la cabecera. Las columnas adosadas a los pilares del ábside central son un reaprovechamiento de fustes y capiteles romanos y árabes. Será a partir de este momento cuando la iglesia adopte un plan definitivamente mudéjar, tanto en su planta basilical como en su ábside marcado por un goticismo tosco.`);
            cambEn('');
        }
    };

    return (
        <section>
            {/*Sacar Imagen*/}
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/parroquia.jpg")]'>
                <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Parroquia de Nuestra de la Asuncion
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


            <Carousel images={images} />
        </section>
    );
}

export default Parroquia;