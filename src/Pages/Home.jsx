import { Link } from "react-router-dom";
// Usando el logo con fondo transparente que mencionaste
import logo from "../Assets/logo_knowly-removebg-preview.png";

function Home() {
  return (
    <div className="min-h-screen text-white font-sans flex flex-col">
      
      {/* EL NAVBAR ya viene de App.jsx, por lo que este contenedor flex-grow 
          asegura que el contenido ocupe el espacio restante y empuje el footer al final.
      */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-12">
        
        {/* SECCIÓN BIENVENIDA (Sin recuadro, texto directo) */}
        <header className="flex flex-col items-center text-center mb-20 animate-fade-in">
          <img 
            src={logo} 
            alt="Knowly Logo" 
            className="w-40 h-40 md:w-52 md:h-52 mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.4)]" 
          />

          <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter" style={{ textShadow: '0_10px_20px_rgba(0,0,0,0.4)' }}>
            Bienvenido a <span className="text-blue-200">Knowly</span>
          </h1>

          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl leading-relaxed font-medium opacity-95">
            Aprende sin límites. La plataforma donde el conocimiento se comparte y los logros se certifican.
          </p>

          <Link 
            to="/Login" 
            className="group relative inline-flex items-center justify-center px-14 py-4 font-bold text-white transition-all duration-300 bg-blue-600 rounded-2xl hover:bg-blue-500 hover:scale-105 shadow-[0_10px_20px_rgba(37,99,235,0.3)]"
          >
            Comenzar ahora
            <svg className="w-6 h-6 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </header>

        {/* SECCIÓN DE IDENTIDAD (Pestañas optimizadas) */}
        <section className="max-w-6xl w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* TARJETA 01: MISIÓN */}
            <div className="flex flex-col items-center text-center backdrop-blur-md bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-300 text-sm font-bold tracking-widest uppercase mb-2">01. Nuestra Misión</div>
              <h3 className="text-2xl font-bold mb-3">Misión</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-80">
                Democratizar la educación técnica, permitiendo que expertos compartan su saber y estudiantes se certifiquen.
              </p>
            </div>

            {/* TARJETA 02: VISIÓN */}
            <div className="flex flex-col items-center text-center backdrop-blur-md bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-300 text-sm font-bold tracking-widest uppercase mb-2">02. Nuestra Visión</div>
              <h3 className="text-2xl font-bold mb-3">Visión</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-80">
                Ser la plataforma líder de habla hispana, el puente principal entre el aprendizaje y el éxito profesional.
              </p>
            </div>

            {/* TARJETA 03: PROPÓSITO */}
            <div className="flex flex-col items-center text-center backdrop-blur-md bg-white/5 p-8 rounded-[2rem] border border-white/10 shadow-lg hover:bg-white/10 transition-all duration-300">
              <div className="text-blue-300 text-sm font-bold tracking-widest uppercase mb-2">03. Nuestro Fin</div>
              <h3 className="text-2xl font-bold mb-3">Propósito</h3>
              <p className="text-gray-200 text-sm md:text-base leading-relaxed opacity-80">
                Impulsar el crecimiento personal a través de la educación accesible, transformando pasiones en carreras.
              </p>
            </div>

          </div>
        </section>
      </div>

      {/* PIE DE PÁGINA (Ajustado al final) */}
      <footer className="w-full py-8 text-center border-t border-white/5 bg-black/10 backdrop-blur-sm">
        <p className="text-xs tracking-[0.2em] text-gray-400 uppercase font-medium">
          © 2026 Knowly — Potenciando el Futuro Digital
        </p>
      </footer>
    </div>
  );
}

export default Home;
