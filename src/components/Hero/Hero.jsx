import React from 'react';

const Hero = () => {
  return (
    <main className="scroll-smooth" id="inicio">
      {/* HERO SECTION */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Productos del Mar</span>
              <span className="block text-blue-400">Directos de Puerto Libertad</span>
            </h1>

            <p className="text-lg md:text-xl text-white drop-shadow-lg max-w-3xl mx-auto mb-8">
              Somos una empresa dedicada a la compra directa de productos del mar a quienes los capturan,
              para su comercialización en mayoreo y menudeo a toda la republica Mexicana, garantizando frescura, trazabilidad y comercio justo.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#productos" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300">
                Ver Productos
              </a>
              <a href="#contacto" className="px-8 py-3 border-2 border-white drop-shadow-lg hover:bg-white/20 text-white font-medium rounded-lg transition duration-300">
                Contactar
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
      <div className='scroll-smooth bg-gradient-to-b via-white/60 to-white/60'>
        {/* SECCIÓN NOSOTROS */}
        <section id="nosotros" className="py-20  text-black">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Quiénes Somos</h2>
            <p className="text-lg">
              En Puerto Libertad, trabajamos directamente con pescadores locales para adquirir productos del mar frescos y de calidad.
              Nos encargamos de su recepción, manejo y distribución tanto a compradores mayoristas de toda la republica Mexicana y a comercios locales,
              fomentando el comercio justo y la eficiencia en la cadena de suministro.
            </p>
          </div>
        </section>

        {/* SECCIÓN PRODUCTOS */}
        <section id="productos" className="py-20  text-black">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Líneas de Producto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-white/60 rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Captura Diaria</h3>
                <p>Compra directa a trabajadores del mar: camarón, pescado, moluscos y más.</p>
              </div>
              <div className="bg-white/60 rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Venta al Mayoreo</h3>
                <p>Distribución en grandes cantidades a centros de acopio, empresas y revendedores.</p>
              </div>
              <div className="bg-white/60 rounded-xl shadow p-6">
                <h3 className="text-xl font-semibold mb-2">Suministro Local</h3>
                <p>Entrega a comercios, restaurantes y consumidores locales en presentaciones pequeñas.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN CONTACTO */}
        <section id="contacto" className="py-20 text-black">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
            <p className="mb-6">
              ¿Quieres comprar en volumen, hacer un pedido o colaborar con nosotros? Estos son nuestros medios de contacto:
            </p>
            <div className="space-y-2">
              <p><strong>Teléfono:</strong> (637) 376-3197</p>
              <p><strong>Email:</strong> pelayopuerto6@gmail.com</p>
              <p><strong>Ubicación:</strong> Puerto Libertad, Sonora</p>
            </div>
            {/*Bototn de watsapp */}
            <a href="https://wa.me/526373763197"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-5 py-3 rounded-lg text-lg font-medium hover:bg-green-600 transition-colors duration-300">
              <i className="bi bi-whatsapp text-2xl"></i>
              Enviar Mensaje Por whatsapp
            </a>

            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps?q=29.90542,-112.6842&z=15&output=embed"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>

          </div>
        </section>
      </div>
    </main>
  );
};

export default Hero;
