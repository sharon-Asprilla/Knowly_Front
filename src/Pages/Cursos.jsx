import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getLocalStorage, saveLocalStorage } from "../Helpers/local-storage"

import jsImg from '../Assets/js.png.jpeg'
import reactImg from '../Assets/react.png.jpeg'
import nodeImg from '../Assets/node.png.jpeg'
import pyImg from '../Assets/py.png.jpeg'
import cyberImg from '../Assets/ciberseguridad.png'

function Cursos() {
  const [usuario, setUsuario] = useState(null)
  const [mostrarForm, setMostrarForm] = useState(false)
  const [nombreCurso, setNombreCurso] = useState("")
  const [descripcionCurso, setDescripcionCurso] = useState("")
  const [precioCurso, setPrecioCurso] = useState("")
  const [videoCurso, setVideoCurso] = useState("")
  const [imagenCurso, setImagenCurso] = useState("")
  
  // Lista de cursos inicial (podrías luego conectarla a una API)
  const [courses, setCourses] = useState([
  {
    slug: 'javascript',
    name: 'Introducción a JavaScript',
    price: '$49',
    image: jsImg,
    description: 'Aprende las bases del lenguaje más popular de la web.'
  },
  {
    slug: 'react',
    name: 'React para principiantes',
    price: '$59',
    image: reactImg,
    description: 'Domina la librería de Facebook para crear interfaces modernas.'
  },
  {
    slug: 'node',
    name: 'Desarrollo con Node.js',
    price: '$69',
    image: nodeImg,
    description: 'Crea servidores robustos y escalables con JavaScript.'
  },
  {
    slug: 'python',
    name: 'Python básico',
    price: '$39',
    image: pyImg,
    description: 'Inicia en el mundo de la programación con Python.'
  },
  {
    slug: 'ciberseguridad',
    name: 'Ciberseguridad esencial',
    price: '$79',
    image: cyberImg,
    description: 'Protege sistemas y redes contra ataques digitales.'
  },
]);

  const agregarCurso = (e) => {
    e.preventDefault();
    const nuevoCurso = {
      slug: nombreCurso.toLowerCase().replace(/\s+/g, "-"),
      name: nombreCurso,
      description: descripcionCurso,
      price: precioCurso,
      image: imagenCurso || jsImg,
      video: videoCurso,
      creadorId: usuario?.ideusuario // Guardamos el ID del profesor que crea el curso
    };

    const dynamicCourses = getLocalStorage("Cursos_Dinamicos") || [];
    const updatedDynamic = [...dynamicCourses, nuevoCurso];
    saveLocalStorage("Cursos_Dinamicos", updatedDynamic);
    setCourses([...courses, nuevoCurso]);
    
    setMostrarForm(false);
    setNombreCurso("");
    setDescripcionCurso("");
    setPrecioCurso("");
    setVideoCurso("");
    setImagenCurso("");
  };

  const eliminarCurso = (slug) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este curso?")) {
      const updatedCourses = courses.filter((c) => c.slug !== slug);
      setCourses(updatedCourses);
      
      const dynamicCourses = getLocalStorage("Cursos_Dinamicos") || [];
      const filteredDynamic = dynamicCourses.filter((c) => c.slug !== slug);
      saveLocalStorage("Cursos_Dinamicos", filteredDynamic);
    }
  };

  useEffect(() => {
    const user = getLocalStorage("Usuario")
    setUsuario(user)

    // Cargar cursos dinámicos guardados al iniciar
    const dynamic = getLocalStorage("Cursos_Dinamicos") || [];
    if (dynamic.length > 0) {
      setCourses(prev => [...prev, ...dynamic]);
    }
  }, [])

  return (
    <div className="main text-black">
      {/* HERO */}
      <div className="flex justify-center px-6 pt-0 pb-6">

        <div className="max-w-4xl text-center">

          <div className="inline-flex items-center rounded-full bg-white/30 backdrop-blur-md px-4 py-2 mb-4">
            <span className="text-sm font-semibold text-black">
              Biblioteca de cursos
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-black mb-4">
            Aprende nuevas habilidades a tu ritmo
          </h1>

          <p className="text-base md:text-lg leading-7 text-black/75 max-w-3xl mx-auto">
            Descubre diferentes cursos diseñados para ayudarte a aprender
            temas de manera práctica, clara y paso a paso. Explora nuevas
            habilidades, mejora tus conocimientos y avanza a tu propio ritmo.
          </p>

        </div>

      </div>

      {/* ACCIONES EXCLUSIVAS PARA PROFESORES */}
      {usuario?.rol?.toUpperCase() === "PROFESOR" && (
        <div className="flex flex-col items-center mb-10 px-6">
          <button 
            onClick={() => setMostrarForm(!mostrarForm)}
            className="bg-purple-600 text-white px-8 py-3 rounded-2xl font-bold shadow-lg hover:bg-purple-700 transition-all mb-6"
          >
            {mostrarForm ? "Cancelar creación" : "Crear Nuevo Curso"}
          </button>

          {mostrarForm && (
            <div className="w-full max-w-lg bg-white p-8 rounded-3xl shadow-2xl border border-purple-100 animate-fade-in">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Detalles del nuevo curso</h2>
              <form onSubmit={agregarCurso} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-1 ml-1 uppercase">Nombre del curso</label>
                  <input 
                    type="text" 
                    placeholder="Ej: React Avanzado" 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none transition-all"
                    value={nombreCurso}
                    onChange={(e) => setNombreCurso(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-1 ml-1 uppercase">Descripción corta</label>
                  <textarea 
                    placeholder="Describe brevemente de qué trata este curso..." 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none resize-none transition-all"
                    rows="3"
                    value={descripcionCurso}
                    onChange={(e) => setDescripcionCurso(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-1 ml-1 uppercase">Precio del curso</label>
                  <input 
                    type="text" 
                    placeholder="Ej: $49 o Gratis" 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none transition-all"
                    value={precioCurso}
                    onChange={(e) => setPrecioCurso(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-1 ml-1 uppercase">URL del Video (YouTube/Embed)</label>
                  <input 
                    type="url" 
                    placeholder="https://www.youtube.com/embed/..." 
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none transition-all"
                    value={videoCurso}
                    onChange={(e) => setVideoCurso(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-400 mb-1 ml-1 uppercase">Imagen de Portada (Archivo)</label>
                  <input 
                    key={mostrarForm}
                    type="file" 
                    accept="image/*"
                    className="w-full p-4 bg-gray-50 border-2 border-transparent focus:border-purple-400 rounded-2xl outline-none transition-all file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setImagenCurso(reader.result); // Guarda la imagen como Base64
                        };
                        reader.readAsDataURL(file);
                      }
                    }}
                    required
                  />
                  {/* Vista previa de la imagen seleccionada */}
                  {imagenCurso && (
                    <div className="mt-4 p-2 bg-gray-100 rounded-2xl flex items-center gap-4">
                      <img src={imagenCurso} alt="Preview" className="w-16 h-16 object-cover rounded-xl shadow-md" />
                      <span className="text-xs text-gray-500 font-bold uppercase">Vista previa de la portada</span>
                    </div>
                  )}
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200">
                  Publicar Curso Ahora
                </button>
              </form>
            </div>
          )}
        </div>
      )}

      {/* CARDS */}
      <div className="Cards-container">

        {courses.map((c) => (

          <div
            key={c.name}
            className="Card overflow-hidden relative"
          >

            {/* Botón Eliminar: Solo visible para Profesores */}
            {usuario?.rol?.toUpperCase() === "PROFESOR" && c.creadorId === usuario.ideusuario && (
              <button 
                onClick={() => eliminarCurso(c.slug)}
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-600 text-white p-2 rounded-xl transition-all shadow-lg z-10"
                title="Eliminar curso"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
              </button>
            )}

            {/* Imagen */}
            <img
              src={c.image}
              alt={c.name}
              className="w-full h-52 object-cover rounded-2xl"
            />

            {/* Contenido */}
            <div className="pt-4">

              <h3 className="text-2xl font-bold leading-tight text-black mb-3">
                {c.name}
              </h3>

              <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                {c.description}
              </p>

              <p className="text-xl font-semibold text-purple-700">
                {c.price}
              </p>

              {/* Botón */}
              <div className="mt-6">

                <Link
                  to={`/curso/${c.slug}`}
                  className="
                    w-full
                    bg-gradient-to-r
                    from-purple-500
                    to-purple-600
                    hover:from-purple-600
                    hover:to-purple-700
                    text-white
                    font-semibold
                    py-3
                    rounded-2xl
                    transition-all
                    duration-300
                    shadow-lg
                    hover:shadow-xl
                    hover:-translate-y-0.5
                    flex
                    items-center
                    justify-center
                  "
                >
                  Ingresar
                </Link>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );
}

export default Cursos;