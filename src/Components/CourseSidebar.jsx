import { useState } from "react"

const courseSections = {

    python: [
        {
            title: "Introducción a Python",
            lessons: [
                {
                    title: "¿Qué es Python?",
                    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
                    description: "Aprende qué es Python, para qué sirve y por qué es tan popular.",
                },
                {
                    title: "Instalación y entorno de trabajo",
                    video: "https://www.youtube.com/embed/rfscVS0vtbw",
                    description: "Aprende a instalar Python y preparar tu entorno de desarrollo.",
                },
                {
                    title: "🚀 Tu primer programa en Python",
                    video: "https://www.youtube.com/embed/_uQrJ0TkZlc",
                    description: "Crea tu primer programa en Python paso a paso.",
                },
            ],
        },

        {
            title: "Fundamentos del Lenguaje",
            lessons: [
                {
                    title: "Variables y tipos de datos",
                    video: "https://www.youtube.com/embed/khKv-8q7YmY",
                    description: "Aprende a usar variables, strings, números y booleanos.",
                },
                {
                    title: "Operadores básicos",
                    video: "https://www.youtube.com/embed/kqtD5dpn9C8",
                    description: "Aprende operadores matemáticos, comparaciones y lógica básica.",
                },
            ],
        },
    ],

    javascript: [
        {
            title: "Introducción a JavaScript",
            lessons: [
                {
                    title: "¿Qué es JavaScript?",
                    video: "https://www.youtube.com/embed/W6NZfCO5SIk",
                    description: "Conoce cómo funciona JavaScript en la web.",
                },
                {
                    title: "Variables y funciones",
                    video: "https://www.youtube.com/embed/PkZNo7MFNFg",
                    description: "Aprende variables, funciones y lógica básica.",
                },
            ],
        },
    ],

    react: [
        {
            title: "Fundamentos de React",
            lessons: [
                {
                    title: "¿Qué es React?",
                    video: "https://www.youtube.com/embed/bMknfKXIFA8",
                    description: "Aprende cómo funciona React y sus componentes.",
                },
                {
                    title: "JSX y componentes",
                    video: "https://www.youtube.com/embed/SqcY0GlETPk",
                    description: "Descubre cómo crear interfaces reutilizables.",
                },
            ],
        },
    ],

    node: [
        {
            title: "Backend con Node.js",
            lessons: [
                {
                    title: "¿Qué es Node.js?",
                    video: "https://www.youtube.com/embed/TlB_eWDSMt4",
                    description: "Aprende cómo funciona Node.js en el backend.",
                },
                {
                    title: "Creando tu servidor",
                    video: "https://www.youtube.com/embed/Oe421EPjeBE",
                    description: "Crea un servidor usando Express y Node.",
                },
            ],
        },
    ],

    ciberseguridad: [
        {
            title: "Introducción a la Ciberseguridad",
            lessons: [
                {
                    title: "¿Qué es la ciberseguridad?",
                    video: "https://www.youtube.com/embed/inWWhr5tnEA",
                    description: "Aprende los fundamentos de la seguridad informática.",
                },
                {
                    title: "Amenazas comunes",
                    video: "https://www.youtube.com/embed/2Ra1CCG8Guo",
                    description: "Conoce los riesgos y ataques más comunes.",
                },
            ],
        },
    ],
}

export default function CourseSidebar({
    currentLesson,
    setCurrentLesson,
    slug,
    sections: propSections
}) {

    const [openIndex, setOpenIndex] = useState(0)

    const progress = 0

    // Si recibe secciones por prop (dinámicos), las usa; si no, usa las hardcodeadas
    const sections = propSections || courseSections[slug] || []

    return (
        <aside
            className="h-[calc(100vh-140px)] overflow-y-auto rounded-2xl border border-white/20 bg-[#2b1645]/70 shadow-2xl backdrop-blur-xl"
            style={{
                padding: "28px",
            }}
        >

            <div className="flex flex-col gap-8">

                <h1 className="text-[22px] font-extrabold leading-[1.25] text-white">
                    {sections[0]?.title}
                </h1>

                <div
                    className="rounded-2xl border border-white/10 bg-white/10"
                    style={{ padding: "18px" }}
                >

                    <div className="mb-3 flex items-center justify-between text-[14px] font-bold text-white">
                        <span>Progreso</span>
                        <span>{progress}%</span>
                    </div>

                    <div className="h-[18px] w-full overflow-hidden rounded-full bg-white/20">

                        <div
                            className="flex h-full items-center rounded-full bg-[#f8d77c] px-2 text-[11px] font-bold text-black"
                            style={{ width: `${progress || 8}%` }}
                        >
                            {progress}%
                        </div>

                    </div>

                </div>

                <div className="flex flex-col gap-4">

                    {sections.map((section, index) => {

                        const isOpen = openIndex === index

                        return (
                            <div
                                key={section.title}
                                className="rounded-xl border border-white/15 bg-white/10"
                            >

                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="!m-0 !flex !h-auto !min-h-[56px] !w-full !items-center !justify-between !gap-4 !rounded-xl !border-0 !bg-transparent !px-5 !py-4 !text-left !leading-normal !shadow-none transition hover:!bg-white/10"
                                >

                                    <span className="block text-[16px] font-extrabold leading-[1.35] text-white">
                                        {section.title}
                                    </span>

                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="shrink-0 text-white/80"
                                        >
                                            <path d="m18 15-6-6-6 6" />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="shrink-0 text-white/80"
                                        >
                                            <path d="m6 9 6 6 6-6" />
                                        </svg>
                                    )}

                                </button>

                                {isOpen && (

                                    <div className="flex flex-col gap-3 border-t border-white/15 px-4 pb-4 pt-3">

                                        {section.lessons.map((lesson) => (

                                            <button
                                                type="button"
                                                key={lesson.title}
                                                onClick={() => setCurrentLesson(lesson)}
                                                className={`
                                                    !m-0
                                                    !h-auto
                                                    !min-h-[52px]
                                                    !w-full
                                                    !rounded-xl
                                                    !border-0
                                                    !px-5
                                                    !py-4
                                                    !text-left
                                                    !text-[15px]
                                                    !font-semibold
                                                    !leading-[1.35]
                                                    !shadow-none
                                                    transition
                                                    ${currentLesson?.title === lesson.title
                                                        ? "!bg-[#f8d77c] !text-black"
                                                        : "!bg-[#2b1645]/70 !text-white hover:!bg-white/10"
                                                    }
                                                `}
                                            >
                                                {lesson.title}
                                            </button>

                                        ))}

                                    </div>

                                )}

                            </div>
                        )
                    })}

                </div>

            </div>

        </aside>
    )
}