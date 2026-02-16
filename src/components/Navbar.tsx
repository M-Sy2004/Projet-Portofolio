import { useState } from "react"

const Navbar = () =>  {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gray-900/80 backdrop-blur-md z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo / Nom */}
        <h1 className="text-2xl font-bold text-white">
          Mamoudou Sy<span className="text-blue-500">.</span>
        </h1>

        {/* Menu Desktop */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-blue-500 transition">À propos</a></li>
          <li><a href="#formation" className="hover:text-blue-500 transition">Formation</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projets</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
        </ul>

        {/* Bouton Contact Desktop */}
        <a
          href="#contact"
          className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition"
        >
          Me contacter
        </a>

        {/* Bouton Hamburger Mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-6">
          <ul className="flex flex-col gap-4 text-gray-300 font-medium">
            <li><a href="#about" onClick={() => setIsOpen(false)}>À propos</a></li>
            <li><a href="#formation" onClick={() => setIsOpen(false)}>Formation</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projets</a></li>
            <li>
              <a
                href="#contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg inline-block"
                onClick={() => setIsOpen(false)}
              >
                Me contacter
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
export default Navbar