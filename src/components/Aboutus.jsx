import React from 'react';

function AboutUs() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-7xl">
        <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-8">À propos de nous</h1>

        <section className="mb-16">
          <h2 className="text-4xl text-blue-700 mb-4">Notre Mission</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Nous sommes dédiés à fournir des solutions innovantes et accessibles pour améliorer l'expérience de chaque utilisateur. 
            Notre mission est de simplifier la vie quotidienne grâce à des technologies de pointe et une approche centrée sur l'humain.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl text-blue-700 mb-4">Notre Vision</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Notre vision est de devenir le leader dans notre domaine en offrant des services fiables et de qualité. Nous croyons en l'innovation continue pour répondre aux besoins changeants de nos clients.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl text-blue-700 mb-4">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <img src="https://via.placeholder.com/150" alt="Membre de l'équipe 1" className="w-32 h-32 rounded-full mx-auto mb-4 transform hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Jean Dupont</h3>
              <p className="text-sm text-gray-600 mb-2">CEO & Co-fondateur</p>
              <p className="text-sm text-gray-500">Jean est un passionné de technologie et un visionnaire. Il dirige l'entreprise avec un engagement inébranlable à l'innovation et à la qualité.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <img src="https://via.placeholder.com/150" alt="Membre de l'équipe 2" className="w-32 h-32 rounded-full mx-auto mb-4 transform hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Marie Martin</h3>
              <p className="text-sm text-gray-600 mb-2">Responsable Marketing</p>
              <p className="text-sm text-gray-500">Marie est la tête créative derrière nos campagnes marketing. Elle s'assure que notre message atteint le public de manière impactante et authentique.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
              <img src="https://via.placeholder.com/150" alt="Membre de l'équipe 3" className="w-32 h-32 rounded-full mx-auto mb-4 transform hover:scale-105 transition-transform duration-300" />
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">Paul Lefevre</h3>
              <p className="text-sm text-gray-600 mb-2">Développeur Principal</p>
              <p className="text-sm text-gray-500">Paul est responsable de la conception et du développement de nos solutions technologiques. Son expertise technique est essentielle pour l'avancement de nos projets.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-4xl text-blue-700 mb-4">Nos Valeurs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <p className="text-lg text-gray-700">Innovation continue</p>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <p className="text-lg text-gray-700">Excellence dans la qualité</p>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <p className="text-lg text-gray-700">Engagement envers le client</p>
            </div>
            <div className="flex items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-700 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
              <p className="text-lg text-gray-700">Travail d'équipe</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
