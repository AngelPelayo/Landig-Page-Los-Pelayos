import React from 'react';

const Hero = () => {
  return (
    <main className="scroll-smooth" id="inicio">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 text-white" id="inicio">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Mariscos Frescos de</span>
              <span className="block text-blue-300">Puerto Libertad</span>
            </h1>

            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Productos del mar de la más alta calidad, directamente de nuestros pescadores a tu mesa.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#productos" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
                Ver Productos
              </a>
              <a href="#contacto" className="px-8 py-3 border-2 border-white hover:bg-white/10 text-white font-medium rounded-lg transition duration-300">
                Contactar Ahora
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
          <a href="#nosotros" className="animate-bounce">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </section>

      {/* SECCIÓN NOSOTROS */}
      <section id="nosotros" className="py-20 bg-white/30 text-black">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sobre Nosotros</h2>
          <p className="text-lg">
            Somos una empresa familiar dedicada a ofrecer mariscos frescos directamente del mar a tu mesa. Con décadas de experiencia, garantizamos calidad y sabor en cada producto.
          </p>
        </div>
      </section>

      {/* SECCIÓN PRODUCTOS */}
      <section id="productos" className="py-20 bg-white/50 text-black">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Nuestros Productos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Camarones</h3>
              <p>Frescos, grandes y listos para cocinar.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Pulpo</h3>
              <p>Capturado en el Golfo, ideal para ceviche.</p>
            </div>
            <div className="bg-white rounded-xl shadow p-6">
              <h3 className="text-xl font-semibold mb-2">Filetes de Pescado</h3>
              <p>Empacados al vacío y con calidad garantizada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO */}
      <section id="contacto" className="py-20 bg-white/60 text-black">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="mb-6">¿Tienes dudas o quieres hacer un pedido? Contáctanos por estos medios:</p>
          <div className="space-y-2">
            <p><strong>Teléfono:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> contacto@mariscoslibertad.com</p>
            <p><strong>Ubicación:</strong> Puerto Libertad, Sonora</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;
