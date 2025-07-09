import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'

function App() {

  // Obtenemos el mes actual (0 = enero, 11 = diciembre)
  const mes = new Date().getMonth()

  // Definimos estaciones según el mes
  const esVeranoOPrimavera = mes >= 3 && mes <= 8 // abril (3) a septiembre (8)

  // Imagen y color según estación
  const imagen = esVeranoOPrimavera ? '/src/assets/verano.png' : '/src/assets/invierno.png'
  const colorFondo = esVeranoOPrimavera ? '#4EC0F2' : '#658AB6'


  const [mostrarPortada, setMostrarPortada] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setMostrarPortada(false)
      } else {
        setMostrarPortada(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <>

      <div
        className={`w-full h-screen bg-no-repeat bg-cover bg-center transition-all duration-700 ease-in-out ${mostrarPortada ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        style={{ backgroundImage: `url(${imagen})` }}
      >



        <div className="absolute left-6 sm:left-12 bottom-28 sm:bottom-90 bg-black/60 text-white p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-md">
          <h2 className="text-2xl font-bold mb-2">Enric Cabezas Freixas</h2>
          <p>Desarollador Multiplataforma & Administrador de Sistemas en Red</p>
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => window.open("https://github.com/EnricCaFr", "_blank")}
              className="mt-4 flex items-center gap-2 text-white transition duration-300 transform hover:scale-150"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5rem"
                height="2.5rem"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
            </button>

            <button
              onClick={() => window.open("https://www.linkedin.com/in/enric-cabezas/", "_blank")}
              className="mt-4 flex items-center gap-2 text-white transition duration-300 transform hover:scale-150"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg>
            </button>


            <button
              onClick={() => window.open("https://www.linkedin.com/in/enric-cabezas/", "_blank")}
              className="mt-4 flex items-center gap-2 text-white border-4 border-white px-3 py-2 rounded transition duration-300 transform hover:scale-110"
            >
              Descargar
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-file-cv">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
            </button>
          </div>

        </div>
      </div>

      <div style={{ backgroundColor: colorFondo }}>
        <div className="flex justify-center pt-20">
          <div className="bg-black/60 text-white p-4 sm:p-6 rounded-lg max-w-[90%] sm:max-w-md">
            <h2 className="text-2xl font-bold mb-2 text-center">Sobre mí</h2>
            <p className="text-center">
              Soy un apasionado del desarrollo y la tecnología. Me encanta crear soluciones que impacten positivamente.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
