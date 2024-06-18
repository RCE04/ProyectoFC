import Carousel from "@/components/carousel";

export default function Home() {
  const images = [
    "celda3.jpg",
    "iglesia1.jpg",
    "iglesia2.jpg",
    "parroquia.jpg",
    "museo-banner.jpg"
  ];

  return (
    <>
      <div className='bg-cover bg-no-repeat bg-fixed bg-center h-[60vh] bg-[url("/banner.jpg")] z-0'>
        <h1 className="text-4xl font-extrabold text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[20vh] md:-translate-y-[15vh]">
          CASTRO DEL RÍO:<br></br>
          VILLA CERVANTINA
        </h1>
      </div>

      <section className="w-full p-5 md:flex gap-3 items-center mt-4">
        <div className="w-full md:mx-8 mt-4 md:mt-0 md:w-1/2 mx-auto text-pretty">
          <h1 className="text-2xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mb-4">HISTORIA</h1>
          <p className="text-lg p-5 md:text-lg md:mb-4">El abrazo de las aguas del Guadajoz, río que ha dado forma a este singular cruce de caminos entre Granada y Córdoba, la villa de Castro del Río, territorio que se ha asentado en la campiña desde la prehistoria, (íberos, romanos, árabes, y cristianos), culturas que eligieron estas tierras en las que hoy nos encontramos Castro del Río como su hogar, su medio de vida y sobre todo, un lugar en el que legarnos su arte y su cultura.</p>
        </div>
        <img src='castro1.jpg' className='w-full md:w-1/2 h-50 object-cover' alt="Detalles de Artesanía" />
      </section>

      <section className="w-full p-5 md:flex gap-3 items-center mt-2 md:mt-0">
        <div className="w-full md:mx-13 mt-4 md:mt-0 mx-auto text-pretty">
          <h1 className="text-3xl md:text-4xl text-[#043c54] underline decoration-[#f3bc04] font-bold mb-2 md:mt-4 md:mx-10">Lugares a visitar:</h1>
          <ul className="text-lgs md:text-lg md:mt-2 md:mx-16 space-y-2">
            <li>
              <a href="/celda" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Celda de Cervantes</a>
            </li>
            <li>
              <a href="/castillo" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Castillo-Muralla</a>
            </li>
            <li>
              <a href="/parroquia" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Parroquia de nuestra señora de la asuncion</a>
            </li>
            <li>
              <a href="/iglesia" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Iglesia de nuestra señora del carmen</a>
            </li>
            <li>
              <a href="/convento" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Convento de Scala Coeli</a>
            </li>
            <li>
              <a href="/triunfo" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Triunfo de San Rafael</a>
            </li>
            <li>
              <a href="/barrio" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Barrio de la villa</a>
            </li>
            <li>
              <a href="/museo" className="text-[#043c54] hover:text-[#f3bc04] underline hover:no-underline transition duration-300">Museo Antonio Villa-Toro (Iglesia de san Acisclo y santa Victoria)</a>
            </li>
          </ul>
        </div>
        <Carousel images={images} />
      </section>

      <section className='my-10 border-[#f3bc04] md:border-0 flex flex-col items-center'>
        <div className='text-4xl text-[#043c54] font-bold mx-4 md:mx-8 lg:mx-64 border-4 border-l-[#fff] border-t-[#fff] border-r-[#fff] border-b-[#f3bc04]'>
          Mapa de Lugares
        </div>
        <a href="/mapa.jpg"><img src="mapa2.jpg" alt="mapa" className='mt-4' /></a>
      </section>
    </>
  );
}