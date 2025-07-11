import './App.css'

function App() {
  const mes = new Date().getMonth()

  let imagen = ''
  let imgmar = ''

  if ([11, 0, 1].includes(mes)) {
    // Invierno
    imagen = '/src/assets/invierno.png'
    imgmar = '/src/assets/marinvierno.png'
  } else if ([2, 3, 4].includes(mes)) {
    // Primavera
    imagen = '/src/assets/primavera.png'
    imgmar = '/src/assets/marprimavera.png'
  } else if ([5, 6, 7].includes(mes)) {
    // Verano
    imagen = '/src/assets/verano.png'
    imgmar = '/src/assets/marverano.png'
  } else {
    // Otoño
    imagen = '/src/assets/otono.png'
    imgmar = '/src/assets/marotono.png'
  }
  return (
    <>
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imagen})` }}
      >
        <div className="absolute bottom-90 left-6 sm:left-12 bg-black/60 text-white p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-md">
          <h2 className="text-2xl font-bold mb-2">Enric Cabezas Freixas</h2>
          <p>Desarrollador Multiplataforma & Administrador de Sistemas en Red</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => window.open("https://github.com/EnricCaFr", "_blank")}
              className="flex items-center gap-2 text-white transition duration-300 transform hover:scale-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="2.5rem" height="2.5rem" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/enric-cabezas/", "_blank")}
              className="flex items-center gap-2 text-white transition duration-300 transform hover:scale-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" />
                <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
              </svg>
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/enric-cabezas/", "_blank")}
              className="flex items-center gap-2 text-white border-4 border-white px-3 py-2 rounded transition duration-300 transform hover:scale-110"
            >
              Descargar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
                <path d="M13 11l1.5 6l1.5 -6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${imgmar})` }}>

        <div className="flex justify-center pt-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#1b3c55] mb-6">Experiencia Laboral</h2>


            <div className="flex justify-center pt-5 px-4">
              <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-4xl">
                <h3 className="text-xl font-semibold text-[#1b3c55]">Analista Funcional & Automatizador QA</h3>
                <p className="text-sm text-gray-700 mb-1">Inetum · Tarragona (España) — Híbrido</p>
                <p className="text-sm text-gray-600 italic mb-4">Junio 2023 – Actualidad</p>
                <p className="text-gray-800">
                  Diseño flujos y planes de prueba, desarrollo y automatizo pruebas usando <strong>Selenium WebDriver</strong> para mejorar la eficiencia y detectar errores rápidamente.
                  Trabajo en conjunto con equipos de desarrollo y negocio para traducir los requisitos en especificaciones técnicas claras, asegurando la calidad funcional del software.
                </p>
              </div>
            </div>


          </div>
        </div>


      </div>
      <div style={{ backgroundImage: `url(${imgmar})` }}>
        <div className="flex justify-center pt-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#1b3c55] mb-10">Proyectos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Tarjeta 1 */}
              <div className="relative bg-white rounded-xl shadow p-4 aspect-square transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-1">Proyecto 1</h3>
                <p className="text-sm text-gray-700 mb-16">
                  Breve descripción del proyecto. Aquí se explica su funcionalidad y propósito general.
                </p>
                <img
                  src="/ruta/a/imagen-proyecto.png"
                  alt="Proyecto"
                  className="absolute bottom-4 right-4 w-12 h-12 object-contain rounded"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <img src="/assets/java.png" alt="Java" className="w-7 h-7 rounded-full" />
                  <img src="/logos/angular.png" alt="Angular" className="w-7 h-7 rounded-full" />
                </div>
              </div>

              {/* Tarjeta 2 */}
              <div className="relative bg-white rounded-xl shadow p-4 aspect-square transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-1">Proyecto 2</h3>
                <p className="text-sm text-gray-700 mb-16">
                  Descripción breve del segundo proyecto. Explica la utilidad o lo que resolvía.
                </p>
                <img
                  src="/ruta/a/imagen-proyecto.png"
                  alt="Proyecto"
                  className="absolute bottom-4 right-4 w-12 h-12 object-contain rounded"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <img src="/logos/spring.png" alt="Spring" className="w-7 h-7 rounded-full" />
                  <img src="/logos/mysql.png" alt="MySQL" className="w-7 h-7 rounded-full" />
                </div>
              </div>

              {/* Tarjeta 3 */}
              <div className="relative bg-white rounded-xl shadow p-4 aspect-square transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-1">Proyecto 3</h3>
                <p className="text-sm text-gray-700 mb-16">
                  Otro proyecto interesante. Puedes detallar el tipo de app o funcionalidades clave.
                </p>
                <img
                  src="/ruta/a/imagen-proyecto.png"
                  alt="Proyecto"
                  className="absolute bottom-4 right-4 w-12 h-12 object-contain rounded"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <img src="/logos/react.png" alt="React" className="w-7 h-7 rounded-full" />
                  <img src="/logos/firebase.png" alt="Firebase" className="w-7 h-7 rounded-full" />
                </div>
              </div>

              {/* Tarjeta 4 */}
              <div className="relative bg-white rounded-xl shadow p-4 aspect-square transition-transform hover:scale-105">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-1">Proyecto 4</h3>
                <p className="text-sm text-gray-700 mb-16">
                  Proyecto final de grado, app real o algo que quieras destacar. Breve resumen.
                </p>
                <img
                  src="/ruta/a/imagen-proyecto.png"
                  alt="Proyecto"
                  className="absolute bottom-4 right-4 w-12 h-12 object-contain rounded"
                />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <img src="/logos/android.png" alt="Android" className="w-7 h-7 rounded-full" />
                  <img src="/logos/java.png" alt="Java" className="w-7 h-7 rounded-full" />
                </div>
              </div>
            </div>

            {/* Botón */}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button className="bg-[#1b3c55] text-white px-6 py-2 rounded-full hover:bg-[#153049] transition-transform hover:scale-105">
            Más Proyectos
          </button>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${imgmar})` }}>
        <div className="flex justify-center pt-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#1b3c55] mb-6">Habilidades</h2>

            {/* Primera fila */}
            <div className="flex flex-wrap gap-4 justify-between">
              {/* Lenguajes */}
              <div className="flex-1 min-w-[45%] bg-white/90 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-3">Lenguajes</h3>
                <div className="flex flex-wrap gap-3">
                  <img src="./assets/java.svg" alt="Java" className="w-10 h-10 rounded-full" />
                  <img src="./assets/python.svg" alt="Python" className="w-10 h-10 rounded-full" />
                  <img src="./assets/javascript.svg" alt="JavaScript" className="w-10 h-10 rounded-full" />
                  <img src="./assets/csharp.svg" alt="C#" className="w-10 h-10 rounded-full" />
                  <img src="./assets/php.svg" alt="PHP" className="w-10 h-10 rounded-full" />
                </div>
              </div>

              {/* FrontEnd */}
              <div className="flex-1 min-w-[45%] bg-white/90 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-3">FrontEnd</h3>
                <div className="flex gap-3">
                  <img src="./assets/html.svg" alt="HTML" className="w-10 h-10 rounded-full" />
                  <img src="./assets/css.svg" alt="CSS" className="w-10 h-10 rounded-full" />
                  <img src="./assets/angular.svg" alt="Angular" className="w-10 h-10 rounded-full" />
                </div>
              </div>

              {/* Base de Datos */}
              <div className="flex-1 min-w-[45%] bg-white/90 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-3">Base de Datos</h3>
                <div className="flex gap-3">
                  <img src="./assets/mysql.svg" alt="MySQL" className="w-10 h-10 rounded-full" />
                  <img src="./assets/postgresql.svg" alt="PostgreSQL" className="w-10 h-10 rounded-full" />
                  <img src="./assets/mongodb.svg" alt="MongoDB" className="w-10 h-10 rounded-full" />
                </div>
              </div>

              {/* BackEnd */}
              <div className="flex-1 min-w-[45%] bg-white/90 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-3">BackEnd</h3>
                <div className="flex gap-3">
                  <img src="./assets/java.svg" alt="Java" className="w-10 h-10 rounded-full" />
                  <img src="./assets/nodejs.svg" alt="Node.js" className="w-10 h-10 rounded-full" />
                  <img src="./assets/springboot.svg" alt="Spring Boot" className="w-10 h-10 rounded-full" />
                </div>
              </div>

              {/* Herramientas */}
              <div className="flex-1 min-w-[45%] bg-white/90 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#1b3c55] mb-3">Herramientas</h3>
                <div className="flex gap-3">
                  <img src="./assets/git.svg" alt="Git" className="w-10 h-10 rounded-full" />
                  <img src="./assets/github.svg" alt="GitHub" className="w-10 h-10 rounded-full" />
                  <img src="./assets/postman.svg" alt="Postman" className="w-10 h-10 rounded-full" />
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="mt-6 bg-white/90 rounded-lg p-4">
              <h3 className="text-lg font-semibold text-[#1b3c55] mb-2">Soft Skills</h3>
              <p className="text-gray-800">
                Comunicación efectiva, resolución de problemas, pensamiento crítico, trabajo en equipo y actitud proactiva en entornos colaborativos.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${imgmar})` }}>
        <div className="flex justify-center pt-20 px-4">
          <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-xl p-6 sm:p-8 w-full max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-[#1b3c55] mb-6">Ponte en Contacto</h2>

            <form className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="nombre" className="block text-[#1b3c55] font-semibold mb-1">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4EC0F2] bg-white"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-[#1b3c55] font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#4EC0F2] bg-white"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="mensaje" className="block text-[#1b3c55] font-semibold mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows="5"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#4EC0F2] bg-white"
                ></textarea>
              </div>

            </form>
          </div>
        </div>
              {/* Botón */}
              <div className="flex justify-center mt-6">
                <button
                  type="submit"
                  className="bg-[#1b3c55] text-white font-semibold px-6 py-2 rounded-full transition-transform hover:scale-105 hover:bg-[#153049]"
                >
                  Enviar
                </button>
              </div>
      </div>



    </>
  )
}

export default App
