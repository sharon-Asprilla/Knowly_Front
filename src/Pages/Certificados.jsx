function Certificados() {
  const myCertificates = [
    { 
      id: 1, 
      courseName: 'Introducción a JavaScript', 
      completionDate: '15 de Febrero, 2026',
      grade: 'A'
    },
    { 
      id: 2, 
      courseName: 'React para principiantes', 
      completionDate: '20 de Enero, 2026',
      grade: 'A+'
    },
    { 
      id: 3, 
      courseName: 'Python básico', 
      completionDate: '10 de Diciembre, 2025',
      grade: 'B+'
    },
  ];

  return (
    <div className="certificates-container">
      <h1>Mis Certificados</h1>
      <p className="certificates-subtitle">Cursos completados exitosamente</p>
      
      <div className="certificates-grid">
        {myCertificates.map((cert) => (
          <div key={cert.id} className="certificate-card">
            <div className="certificate-content">
              <h3 className="certificate-title">{cert.courseName}</h3>
              <p className="certificate-info">
                <strong>Completado:</strong> {cert.completionDate}
              </p>
              <p className="certificate-grade">
                <strong>Calificación:</strong> {cert.grade}
              </p>
            </div>
            <button className="certificate-download-btn">Descargar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificados;
