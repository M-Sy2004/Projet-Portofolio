import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-0">
        {/* Copyright */}
        <p className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Mamoudou Sy. Tous droits réservés.</p>

        {/* Réseaux sociaux */}
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/mamoudou-sy/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/M-Sy2004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/your_m_sy___/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Instagram
          </a>
           <a
            href="https://x.com/MamoudouS45212"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            X
          </a>
           <a
            href="https://www.threads.com/@your_m_sy___?xmt=AQF0g65v63p1kNVLw-b4BI_JFCcVIJl1X1HYpU4jFWDSjqk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Threads
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
