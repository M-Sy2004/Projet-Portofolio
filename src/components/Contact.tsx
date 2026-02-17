import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici tu peux ajouter l'envoi réel du formulaire
    console.log("Form submitted:", formData);
    alert("Merci ! Votre message a été envoyé.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 md:px-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h2 className="text-4xl font-bold text-center mb-12 border-b-4 border-blue-500 inline-block pb-2">
          Contact
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Infos de contact */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-300">babasy2004@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Téléphone</h3>
              <p className="text-gray-300">+221 77 012 56 90</p>
               <p className="text-gray-300">+221 70 613 03 03</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Adresse</h3>
              <p className="text-gray-300">Dakar, Sénégal</p>
            </div>
          </div>

          {/* Formulaire */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded transition font-semibold"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
