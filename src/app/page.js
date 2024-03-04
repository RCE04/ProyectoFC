export default function Home() {
  return (
    <main className="ml-0 mr-0 mt-0 text-center relative">
      <div
        className="bg-cover bg-no-repeat  bg-center h-[350px] cover"
      >
        <h1 className="text-4xl font-bold text-white absolute top-[155px] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          Tu taller de confianza
        </h1>
      </div>
      <section className="w-full flex items-center mt-0">
        <div className="w-full mx-13">
          <h1 className="text-4xl font-bold mt-4">Buenos trabajadores y asesores</h1>
          <p className="text-lg mt-2">Nuestros trabajadores estarán encantados de atenderle y resolverle sus dudas</p>
        </div>
        <div className="w-full">
          <img className="w-full" src="/assets/taller-mecanico2.jpeg" />
        </div>
      </section>
    </main>
  );
}