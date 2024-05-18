import Carousel from "@/components/carousel";

export default function Home() {
  const images = [
    "celda3.jpg",
    "iglesia1.jpg",
    "iglesia2.jpg",
    "parroquia.jpg",
    "museo-banner.jpg"
  ]
  return (
    <>
      <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/banner.jpg")]'>
        <h1 className="text-4xl font-extrabold text-[#043c54] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
          CASTRO DEL RIO:<br></br>
          VILLA CERVANTINA
        </h1>
      </div >

      <section className="w-full md:flex gap-3 items-center mt-4">
        <div className="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
          <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORIA</h1>
          <p className="text-lg md:text-lg md:mb-4">El abrazo de las aguas del Guadajoz, río que ha dado forma a este singular cruce de caminos entre Granada y Córdoba, la villa de Castro del Río, territorio que se ha asentado en la campiña desde la prehistoria, (íberos, romanos, árabes, y cristianos), culturas que eligieron estas tierras en las que hoy nos encontramos Castro del Río como su hogar, su medio de vida y sobre todo, un lugar en el que legarnos su arte y su cultura.</p>

        </div>
        <img src='castro1.jpg' className='w-full md:w-1/2 h-50 object-cover' alt="Detalles de Artesanía" />
      </section>

      <section className="w-full md:flex gap-3 items-center mt-2 md:mt-0">
        <div className="w-full md:mx-13 mt-4 md:mt-0 mx-auto text-pretty">
          <h1 className="text-3xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mt-4 md:mx-10">Lugares a visitar:</h1>
          <ul className="text-lgs md:text-lg md:mt-2 md:mx-10">
            <li><a href="/celda">Celda de Cervantes</a></li>
            <li><a href="/castillo">Castillo-Muralla</a></li>
            <li><a href="/parroquia">Parroquia de nuestra señora de la asuncion</a></li>
            <li><a href="/iglesia">Iglesia de nuestra señora del carmen</a></li>
            <li><a href="/convento">Convento de Scala Coeli</a></li>
            <li><a href="/triunfo">Triunfo de San Rafael</a></li>
            <li><a href="/barrio">Barrio de la villa</a></li>
            <li><a href="/museo">Museo Antonio Villa-Toro (Iglesia de san Acisclo y santa Victoria)</a></li>
          </ul>
        </div>
        <Carousel images={images} />
      </section>
    </>
  );
}