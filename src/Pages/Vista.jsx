import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getLocalStorage } from "../Helpers/local-storage"

import CourseSidebar from "../Components/CourseSidebar.jsx"
import CourseContent from "../Components/CourseContent.jsx"

const coursesData = {

    python: {
        title: "¿Qué es Python?",
        video: "https://www.youtube.com/embed/kqtD5dpn9C8",
        description:
            "Aprende qué es Python, para qué sirve y por qué es tan popular.",
    },

    javascript: {
        title: "Introducción a JavaScript",
        video: "https://www.youtube.com/embed/W6NZfCO5SIk",
        description:
            "Descubre cómo funciona JavaScript y comienza a crear experiencias interactivas para la web.",
    },

    react: {
        title: "React para principiantes",
        video: "https://www.youtube.com/embed/bMknfKXIFA8",
        description:
            "Aprende a construir interfaces modernas y dinámicas utilizando React.",
    },

    node: {
        title: "Desarrollo con Node.js",
        video: "https://www.youtube.com/embed/TlB_eWDSMt4",
        description:
            "Crea servidores y aplicaciones backend modernas usando Node.js.",
    },

    ciberseguridad: {
        title: "Fundamentos de Ciberseguridad",
        video: "https://www.youtube.com/embed/inWWhr5tnEA",
        description:
            "Conoce las bases de la seguridad informática y aprende a proteger sistemas y datos.",
    },
}

// Función para convertir links normales de YouTube a links de incrustación (Embed)
const formatYoutubeUrl = (url) => {
    if (!url) return "";
    if (url.includes("youtube.com/embed/")) return url;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : url;
}

export default function Vista() {
    const { slug } = useParams()
    const [currentLesson, setCurrentLesson] = useState(null)
    const [sections, setSections] = useState([])

    useEffect(() => {
        const dynamicCourses = getLocalStorage("Cursos_Dinamicos") || [];
        const dynamicMatch = dynamicCourses.find(c => c.slug === slug);

        if (dynamicMatch) {
            // Si es un curso subido por profesor, creamos la estructura de lección al vuelo
            const lesson = {
                title: dynamicMatch.name,
                video: formatYoutubeUrl(dynamicMatch.video),
                description: dynamicMatch.description
            };
            setCurrentLesson(lesson);
            // Creamos una sección única para que el Sidebar la muestre
            setSections([{
                title: "Contenido del Instructor",
                lessons: [lesson]
            }]);
        } else {
            // Si es un curso base del sistema
            setCurrentLesson(coursesData[slug]);
            setSections(null); // Usará los predefinidos en el Sidebar
        }
    }, [slug])

    if (!currentLesson) {
        return (
            <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
                Curso no encontrado
            </div>
        )
    }

    return (
        <main
            className="min-h-screen bg-gradient-to-br from-[#8B5CF6] via-[#A78BFA] to-[#C4B5FD] text-white"
            style={{
                paddingTop: "120px",
                paddingBottom: "64px",
            }}
        >
            <div
                className="w-full"
                style={{
                    paddingLeft: "70px",
                    paddingRight: "40px",
                }}
            >
                <div className="grid min-h-[calc(100vh-140px)] grid-cols-[420px_minmax(0,1fr)] gap-10">

                    <CourseSidebar
                        currentLesson={currentLesson}
                        setCurrentLesson={setCurrentLesson}
                        slug={slug}
                        sections={sections}
                    />

                    <CourseContent lesson={currentLesson} />

                </div>
            </div>
        </main>
    )
}