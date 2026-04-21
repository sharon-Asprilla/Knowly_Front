import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center 
                     bg-gradient-to-r from-purple-800 via-purple-500 to-purple-300 
                     text-white p-10">
      <div >
        <h1>Bienvenido a Knowly</h1>
        <p >
          Esta es la página de inicio. Usa la barra de navegación para ir a otras secciones.
        </p>

        {/* Botón que redirige al login */}
        <Link 
          to="/" 
          className="mt-6 inline-block bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/80 transition"
        >
          Cerrar sesión
        </Link>
      </div>

      {/* Sección profesional debajo */}
      <section className="mt-20 w-full max-w-3xl bg-white rounded-xl shadow-xl p-10 text-gray-800">
        <h2 className="text-3xl font-bold text-purple-700 mb-6 text-center">
          ¿Qué quieres aprender?
        </h2>

        {/* Texto debajo */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-700 text-lg">Inicia cualquier curso gratis.</p>
          <p className="text-gray-700 text-lg">
            O adquiere <span className="text-purple-600 font-bold">Knowly</span> para tu empresa.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Home;
