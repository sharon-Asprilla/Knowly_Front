function Cursos() {
  const courses = [
    { name: 'Introducción a JavaScript', price: '$49', imgSrc: new URL('../Assets/js,png.jpeg', import.meta.url).href },
    { name: 'React para principiantes', price: '$59', imgSrc: new URL('../Assets/react.png.jpeg', import.meta.url).href },
    { name: 'Desarrollo con Node.js', price: '$69', imgSrc: new URL('../Assets/node.png.jpeg', import.meta.url).href },
    { name: 'Python básico', price: '$39', imgSrc: new URL('../Assets/py.png.jpeg', import.meta.url).href },
    { name: 'Ciberseguridad esencial', price: '$79', imgSrc: new URL('../Assets/ciberseguridad.png', import.meta.url).href },
    { name: 'HTML y CSS avanzado', price: '$55', imgSrc: new URL('../Assets/html-css.png', import.meta.url).href },
    { name: 'Bases de datos con SQL', price: '$65', imgSrc: new URL('../Assets/sql.png', import.meta.url).href },
    { name: 'Machine Learning con Python', price: '$89', imgSrc: new URL('../Assets/machine.png', import.meta.url).href },
  ];

  return (
    <div className="main">
      <h2>Cursos</h2>
      <div className="Cards-container">
        {courses.map((c) => (
          <div key={c.name} className="Card">
            {/* placeholder for future course image */}
            {c.imgSrc ? <img src={c.imgSrc} alt={c.name} className="Card__img" /> : <div className="Card__img" />}
            <h3 className="Card__title">{c.name}</h3>
            <p className="Card__price">{c.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cursos;