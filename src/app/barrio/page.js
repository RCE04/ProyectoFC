"use client";
import Carousel from '@/components/carousel';
import React, { useState, useEffect } from 'react';

function Barrio() {
    const [textoEsp, cambEsp] = useState('');
    const [textoIng, cambIng] = useState('');

    const images = [
        "barrio1.jpg",
        "barrio2.jpg",
        "barrio3.jpg"
    ]

    // Define el contenido en español e inglés
    useEffect(() => {
        cambEsp(`En sus inicios, Castro del Río fue un pueblo-fortaleza, como observamos en su organización en la cima de una colina rodeada por un recinto amurallado, de época almohade, y que hoy en día conocemos como el Barrio de la Villa.  De arquitectura militar, fue fundado en el siglo XII y alberga en su interior casas blancas, plazuelas, callejuelas estrechas y escarpadas que se asemejan a la Judería Cordobesa, y las iglesias más antiguas de la Villa como la Parroquia de Nuestra Señora de la Asunción, declarada Bien de Interés Cultural, o la Iglesia de San Acisclo y Santa Victoria. En uno de sus extremos, encontramos el Barrio Fortaleza, fechado tras la conquista cristiana de Fernando III el Santo  en 1240. Destacamos también los arcos que atraviesan las calles principales en sus accesos, como los de Martos o la Cuesta de Santo Cristo; la Plaza del Romano, recientemente recuperada; el Pósito Municipal, que alberga el Museo de Usos y Costumbres, el legado del músico Joaquín Villatoro o el Centro de Interpretación de la Madera y el Olivo; el Reñidero de Gallos, considerado uno de los más antiguos de toda España; el Teatro Cervantes, centro cultural de la Villa inaugurado en 2021; y las casas solariegas, como la Casa de Mendoza o la Casa de Valdelomar. El acceso a este barrio lo podemos realizar desde alguna de sus tres puertas de acceso, las cuales nos permitirán adentrarnos en un laberinto de rincones, algunos con cierto aire morisco. Casas de cal que son remanso de paz, plazas y callejuelas que en la noche se vuelven silencio, un lugar donde sus viejas piedras nos devuelven la herencia del paso del tiempo. Un barrio que ofrece al visitante el orgullo de sus gentes, el alma de este pueblo, y que es, sin duda, parada indispensable para el peregrino donde encontrará posada y descanso en su Camino Mozárabe de Santiago
`);
        cambIng(`In its beginnings, Castro del Río was a town-fortress, as we see in its organization on the top of a hill surrounded by a walled enclosure, from the Almohad period, and which today we know as the Barrio de la Villa. With military architecture, it was founded in the 12th century and houses white houses, small squares, narrow and steep streets that resemble the Cordoban Jewish Quarter, and the oldest churches in the town such as the Parish of Nuestra Señora de la Asunción, declared Asset of Cultural Interest, or the Church of San Acisclo and Santa Victoria. At one end, we find the Fortress Castle, dated after the Christian conquest of Fernando III the Saint in 1240. We also highlight the arches that cross the main streets at their entrances, such as those of Martos or the Cuesta de Santo Cristo; the Plaza del Romano, recently recovered; the Municipal Deposit, which houses the Museum of Uses and Customs, the legacy of the musician Joaquín Villatoro or the Wood and Olive Interpretation Center; the Reñidero de Gallos, considered one of the oldest in all of Spain; the Cervantes Theater, the town's cultural center inaugurated in 2021; and the ancestral houses, such as the Casa de Mendoza or the Casa de Valdelomar. We can access this neighborhood from one of its three access doors, which will allow us to enter a labyrinth of corners, some with a certain Moorish air. Lime houses that are a haven of peace, squares and alleys that become silent at night, a place where its old stones give us back the heritage of the passage of time. A neighborhood that offers visitors the pride of its people, the soul of this town, and that is, without a doubt, an essential stop for the pilgrim where they will find lodging and rest on their Mozarabe Way to Santiago`);
    }, []);

    const changeLanguage = () => {
        // Cambia entre el contenido en español e inglés
        if (textoEsp !== '') {
            cambEsp('');
            cambIng(`In its beginnings, Castro del Río was a town-fortress, as we see in its organization on the top of a hill surrounded by a walled enclosure, from the Almohad period, and which today we know as the Barrio de la Villa. With military architecture, it was founded in the 12th century and houses white houses, small squares, narrow and steep streets that resemble the Cordoban Jewish Quarter, and the oldest churches in the town such as the Parish of Nuestra Señora de la Asunción, declared Asset of Cultural Interest, or the Church of San Acisclo and Santa Victoria. At one end, we find the Fortress Castle, dated after the Christian conquest of Fernando III the Saint in 1240. We also highlight the arches that cross the main streets at their entrances, such as those of Martos or the Cuesta de Santo Cristo; the Plaza del Romano, recently recovered; the Municipal Deposit, which houses the Museum of Uses and Customs, the legacy of the musician Joaquín Villatoro or the Wood and Olive Interpretation Center; the Reñidero de Gallos, considered one of the oldest in all of Spain; the Cervantes Theater, the town's cultural center inaugurated in 2021; and the ancestral houses, such as the Casa de Mendoza or the Casa de Valdelomar. We can access this neighborhood from one of its three access doors, which will allow us to enter a labyrinth of corners, some with a certain Moorish air. Lime houses that are a haven of peace, squares and alleys that become silent at night, a place where its old stones give us back the heritage of the passage of time. A neighborhood that offers visitors the pride of its people, the soul of this town, and that is, without a doubt, an essential stop for the pilgrim where they will find lodging and rest on their Mozarabe Way to Santiago`);
        } else {
            cambEsp(`En sus inicios, Castro del Río fue un pueblo-fortaleza, como observamos en su organización en la cima de una colina rodeada por un recinto amurallado, de época almohade, y que hoy en día conocemos como el Barrio de la Villa.  De arquitectura militar, fue fundado en el siglo XII y alberga en su interior casas blancas, plazuelas, callejuelas estrechas y escarpadas que se asemejan a la Judería Cordobesa, y las iglesias más antiguas de la Villa como la Parroquia de Nuestra Señora de la Asunción, declarada Bien de Interés Cultural, o la Iglesia de San Acisclo y Santa Victoria. En uno de sus extremos, encontramos el Barrio Fortaleza, fechado tras la conquista cristiana de Fernando III el Santo  en 1240. Destacamos también los arcos que atraviesan las calles principales en sus accesos, como los de Martos o la Cuesta de Santo Cristo; la Plaza del Romano, recientemente recuperada; el Pósito Municipal, que alberga el Museo de Usos y Costumbres, el legado del músico Joaquín Villatoro o el Centro de Interpretación de la Madera y el Olivo; el Reñidero de Gallos, considerado uno de los más antiguos de toda España; el Teatro Cervantes, centro cultural de la Villa inaugurado en 2021; y las casas solariegas, como la Casa de Mendoza o la Casa de Valdelomar. El acceso a este barrio lo podemos realizar desde alguna de sus tres puertas de acceso, las cuales nos permitirán adentrarnos en un laberinto de rincones, algunos con cierto aire morisco. Casas de cal que son remanso de paz, plazas y callejuelas que en la noche se vuelven silencio, un lugar donde sus viejas piedras nos devuelven la herencia del paso del tiempo. Un barrio que ofrece al visitante el orgullo de sus gentes, el alma de este pueblo, y que es, sin duda, parada indispensable para el peregrino donde encontrará posada y descanso en su Camino Mozárabe de Santiago`);
            cambIng('');
        }
    };

    return (
        <section>
            <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/barrio-banner.jpeg")]'>
                <h1 className="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
                    Barrio de la villa
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

export default Barrio;